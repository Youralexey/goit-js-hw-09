// ======================= Subtask 1 =======================
//Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
//Значением исполнившегося промиса должно быть то кол - во миллисекунд которое передали во время вызова функции delay.


const delay = ms => {
  return Promise.resolve(ms)
};

const logger = time => console.log(`Fulfilled after ${time}ms`);

// Tests

delay(2000).then(logger); // Fulfilled after 2000ms
delay(1000).then(logger); // Fulfilled after 1000ms
delay(1500).then(logger); // Fulfilled after 1500ms

// ======================= Subtask 2 =======================
//Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, 
//а принимала всего два параметра allUsers и username и возвращала промис.
const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: false },
];

const toggleUserState = (allUsers, username) => {
  const updatedUsers = allUsers.map(user =>
    user.name === username ? { ...user, active: !user.active } : user
  );

  return Promisw.resolve(updatedUsers);
};
const logger1 = updatedUsers => console.log(updatedUsers);

// Currently the function works like this
// toggleUserState(users, 'Mango', console.table);
// toggleUserState(users, 'Ajax', console.table);

// The function should work like this
// toggleUserState(users, 'Mango').then(console.table);
// toggleUserState(users, 'Ajax').then(console.table);

// ======================= Subtask 3 =======================
//Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError,
//а принимала всего один параметр transaction и возвращала промис.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
  const delay = randomIntegerFromInterval(200, 500);

  return new Promise((resolve, regect) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        onSuccess({ id: transaction.id, time: delay });
      } else {
        onError(transaction.id);
      }
    }, delay);
  });
};

const logSuccess = ({ id, time }) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

// Currently the function works like this
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);

// The function should work like this
// makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
// makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);
// makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);
// makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);