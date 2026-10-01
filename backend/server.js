const express = require("express");
const cors = require("cors");
const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

const excelFile = path.join(__dirname, "Gryphon_Submissions.xlsx");

/* =========================================================
   CREATE EXCEL FILE / SHEETS
========================================================= */

function createExcelFile() {
  let workbook;

  if (fs.existsSync(excelFile)) {
    workbook = XLSX.readFile(excelFile);
  } else {
    workbook = XLSX.utils.book_new();
  }

  /* -------------------------------------------------------
     CONTACT ENQUIRIES
  ------------------------------------------------------- */

  if (!workbook.Sheets["Contact Enquiries"]) {
    const contactSheet = XLSX.utils.aoa_to_sheet([
      [
        "Date & Time",
        "Name",
        "Organization",
        "Email",
        "Phone",
        "Subject",
        "Message",
      ],
    ]);

    XLSX.utils.book_append_sheet(
      workbook,
      contactSheet,
      "Contact Enquiries"
    );
  }

  /* -------------------------------------------------------
     TRAINING REQUESTS
  ------------------------------------------------------- */

  if (!workbook.Sheets["Training Requests"]) {
    const trainingSheet = XLSX.utils.aoa_to_sheet([
      [
        "Date & Time",
        "Name",
        "Organization",
        "Designation",
        "Email",
        "Phone",
        "Training Area",
        "Participants",
        "Preferred Date",
        "Mode",
        "Message",
      ],
    ]);

    XLSX.utils.book_append_sheet(
      workbook,
      trainingSheet,
      "Training Requests"
    );
  }

  /* -------------------------------------------------------
     DEMO REQUESTS
  ------------------------------------------------------- */

  if (!workbook.Sheets["Demo Requests"]) {
    const demoSheet = XLSX.utils.aoa_to_sheet([
      [
        "Date & Time",
        "Name",
        "Organization",
        "Designation",
        "Email",
        "Phone",
        "Area of Interest",
        "Preferred Date",
        "Preferred Time",
        "Requirements",
      ],
    ]);

    XLSX.utils.book_append_sheet(
      workbook,
      demoSheet,
      "Demo Requests"
    );
  }

  XLSX.writeFile(workbook, excelFile);

  console.log("Excel file ready:");
  console.log(excelFile);
}

createExcelFile();

/* =========================================================
   HEALTH CHECK
========================================================= */

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Gryphon Cyber backend is running.",
  });
});

/* =========================================================
   CONTACT FORM
========================================================= */

app.post("/api/contact", (req, res) => {
  try {
    const {
      name,
      organization,
      email,
      phone,
      subject,
      message,
    } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    const workbook = XLSX.readFile(excelFile);

    const worksheet =
      workbook.Sheets["Contact Enquiries"];

    const newRow = [
      new Date().toLocaleString("en-IN"),
      name || "",
      organization || "",
      email || "",
      phone || "",
      subject || "",
      message || "",
    ];

    XLSX.utils.sheet_add_aoa(
      worksheet,
      [newRow],
      { origin: -1 }
    );

    XLSX.writeFile(workbook, excelFile);

    console.log(
      "New contact enquiry received:",
      name
    );

    res.json({
      success: true,
      message:
        "Your enquiry has been submitted successfully.",
    });

  } catch (error) {
    console.error(
      "Contact submission error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Unable to save the enquiry.",
    });
  }
});

/* =========================================================
   TRAINING REQUEST
========================================================= */

app.post("/api/training-request", (req, res) => {
  try {
    const {
      name,
      organization,
      designation,
      email,
      phone,
      trainingArea,
      participants,
      preferredDate,
      mode,
      message,
    } = req.body;

    if (!name || !email || !trainingArea) {
      return res.status(400).json({
        success: false,
        message:
          "Name, email and training area are required.",
      });
    }

    const workbook = XLSX.readFile(excelFile);

    const worksheet =
      workbook.Sheets["Training Requests"];

    const newRow = [
      new Date().toLocaleString("en-IN"),
      name || "",
      organization || "",
      designation || "",
      email || "",
      phone || "",
      trainingArea || "",
      participants || "",
      preferredDate || "",
      mode || "",
      message || "",
    ];

    XLSX.utils.sheet_add_aoa(
      worksheet,
      [newRow],
      { origin: -1 }
    );

    XLSX.writeFile(workbook, excelFile);

    console.log(
      "New training request received:",
      name
    );

    res.json({
      success: true,
      message:
        "Your training request has been submitted successfully.",
    });

  } catch (error) {
    console.error(
      "Training submission error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Unable to save the training request.",
    });
  }
});

/* =========================================================
   BOOK DEMO
========================================================= */

app.post("/api/book-demo", (req, res) => {
  try {
    const {
      name,
      organization,
      designation,
      email,
      phone,
      demoType,
      preferredDate,
      preferredTime,
      requirements,
    } = req.body;

    /* -------------------------------------------------------
       REQUIRED FIELDS
    ------------------------------------------------------- */

    if (
      !name ||
      !organization ||
      !email ||
      !phone ||
      !demoType ||
      !preferredDate ||
      !preferredTime
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Name, organization, email, phone, area of interest, preferred date and preferred time are required.",
      });
    }

    /* -------------------------------------------------------
       READ EXISTING EXCEL FILE
    ------------------------------------------------------- */

    const workbook = XLSX.readFile(excelFile);

    /* -------------------------------------------------------
       GET DEMO REQUESTS SHEET
    ------------------------------------------------------- */

    let worksheet =
      workbook.Sheets["Demo Requests"];

    /* -------------------------------------------------------
       SAFETY CHECK
       Create sheet if it does not exist
    ------------------------------------------------------- */

    if (!worksheet) {
      worksheet = XLSX.utils.aoa_to_sheet([
        [
          "Date & Time",
          "Name",
          "Organization",
          "Designation",
          "Email",
          "Phone",
          "Area of Interest",
          "Preferred Date",
          "Preferred Time",
          "Requirements",
        ],
      ]);

      XLSX.utils.book_append_sheet(
        workbook,
        worksheet,
        "Demo Requests"
      );
    }

    /* -------------------------------------------------------
       ADD NEW DEMO REQUEST
    ------------------------------------------------------- */

    const newRow = [
      new Date().toLocaleString("en-IN"),
      name || "",
      organization || "",
      designation || "",
      email || "",
      phone || "",
      demoType || "",
      preferredDate || "",
      preferredTime || "",
      requirements || "",
    ];

    XLSX.utils.sheet_add_aoa(
      worksheet,
      [newRow],
      { origin: -1 }
    );

    /* -------------------------------------------------------
       SAVE EXCEL FILE
    ------------------------------------------------------- */

    XLSX.writeFile(workbook, excelFile);

    console.log(
      "New demo request received:",
      name
    );

    res.json({
      success: true,
      message:
        "Your demo request has been submitted successfully.",
    });

  } catch (error) {
    console.error(
      "Book Demo submission error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Unable to save the demo request.",
    });
  }
});

/* =========================================================
   START SERVER
========================================================= */

app.listen(PORT, () => {
  console.log("");
  console.log(
    "=============================================="
  );
  console.log(
    "   GRYPHON CYBER BACKEND"
  );
  console.log(
    "=============================================="
  );
  console.log(
    `Server running on http://localhost:${PORT}`
  );
  console.log(
    `Excel file: ${excelFile}`
  );
  console.log(
    "=============================================="
  );
  console.log("");
});