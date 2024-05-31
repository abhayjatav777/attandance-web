export const lastMonths = () => {
  var lastMonths = [];
  var currentDate = new Date();
  for (let i = 1; i <= 11; i++) {
    lastMonths.push(
      currentDate.toLocaleString("default", {
        month: "long",
      }) +
        " " +
        currentDate.getFullYear()
    );
    currentDate.setMonth(currentDate.getMonth() - 1);
  }
};
