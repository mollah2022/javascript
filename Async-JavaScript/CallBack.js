const pramentStatus = true;
const totalMark = 87;

const enroll = (callback) => {
  console.log("Course Enrollment is in Progress");

  setTimeout(function () {
    if (pramentStatus) {
      callback();
    } else {
      console.log("prament process is Fail!");
    }
  }, 2000);
};

const progress = (callback) => {
  console.log("Course on Progress....");

  setTimeout(function () {
    if (totalMark >= 80) {
      callback();
    } else {
      console.log("You could not get enough marks to get the Certificate!");
    }
  }, 3000);
};

const certificated = () => {
  console.log("Preparing the Certificated!!!");

  setTimeout(function () {
    console.log("Congrate! You get the Certificated!!!!");
  }, 1000);
};

enroll(function () {
  progress(certificated);
});
