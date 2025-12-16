export const logEvent = (event) => {
  const logs = JSON.parse(localStorage.getItem("events")) || [];
  logs.push({ event, time: new Date().toISOString() });
  localStorage.setItem("events", JSON.stringify(logs));
};
