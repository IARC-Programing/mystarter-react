const STEP_STATUS = {
  STEP_PENDING: {
    status_code: "STEP_PENDING",
    description: "รอการมอบหมายงาน",
  },
  STEP_READY: {
    status_code: "STEP_READY",
    description: "เตรียมพร้อมทำงาน",
  },
  STEP_IN_PROGRESS: {
    status_code: "STEP_IN_PROGRESS",
    description: "กำลังดำเนินงาน",
  },
  STEP_DONE: {
    status_code: "STEP_DONE",
    description: "สำเร็จ",
  },
};

module.exports = STEP_STATUS;
