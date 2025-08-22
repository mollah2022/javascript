const pramentStatus = true;
const totalMark = 87;

const enroll = () => {
  console.log("Course Enrollment is in Progress");

  const promise = new Promise((resolve, reject) => {
    setTimeout(function () {
      if (pramentStatus) {
        resolve();
      } else {
        reject("prament process is Fail!");
      }
    }, 2000);
  });
  return promise;
};

const progress = () => {
  console.log("Course on Progress....");

  const promise = new Promise((resolve, reject) => {
    setTimeout(function () {
      if (totalMark >= 80) {
        resolve();
      } else {
        reject("You could not get enough marks to get the Certificate!");
      }
    }, 3000);
  });
  return promise;
};

const certificated = () => {
  console.log("Preparing the Certificated!!!");

  const promise = new Promise((resolve) => {
    setTimeout(function () {
      resolve("Congrate! You get the Certificated!!!!");
    }, 1000);
  });
  return promise;
};

const Courses = async () => {
  try {
    await enroll();
    await progress();
    const message = await certificated();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
};

Courses();
