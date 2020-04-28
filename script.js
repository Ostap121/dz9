// Зробити свій розпоряжок дня.
//
// Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
// Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
// Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не успішне виконання.
// Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
//
// Тобто, як приклад
// Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте - Випили кави - Працюєте -
// Поїхали до дому - Повчились - Лягли спати.
//
// Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий варіант, що при виконанні функції доїхати
// на роботу ви стали в заторі і не попали на роботу. Або йдучи на обід ви забули гаманець і лишились голодні.

// Прокинувся - Йду бігати - Сходив в душ - Поснідав -Зібрався- Поїхав в універ - Сплю на лекції - Пообідав - Їду додому -
// Вчуся - Повечеряв - Дивлюсь лекцію - Лягаю спати


function wakeUp(isGetUp, cb) {
    setTimeout(() => {
        if (isGetUp){
            cb(null,'Broo, wake up!')
        } else {
            cb('Wake up piece of shit!', null)
        }
    },1000)
}

function goRun(isGoRun, cb) {
    setTimeout(() => {
        if (isGoRun){
            cb(null,'Run, run Vasya run,  ne ostavʹ shansa musoram')
        } else {
            cb('Fuckkk...The weather is very terrible(', null)
        }
    },1500)
}
function takeShower(isTakeShower, cb) {
    setTimeout(() => {
        if (isTakeShower){
            cb(null,'Time wash up balls, bro')
        } else {
            cb('Ooo shit, no water again... ', null)
        }
    },1000)
}
function breakfast(isBreakfast, cb) {
    setTimeout(() => {
        if (isBreakfast){
            cb(null, 'Breakfast: om nom nom nom')
        } else {
            cb('Fuckkk...Refrigerator is empty...', null)
        }
    },1000)
}
function dressUp(isDressUp, cb) {
    setTimeout(() => {
        if (isDressUp) {
            cb(null, 'Bro, get dressed')
        } else {
            cb('Fuckkk...Clothes are not dry(', null)
        }
    },1000)
}
function goUniversity(isGoUniversity, cb) {
    setTimeout(() => {
        if (isGoUniversity) {
            cb(null, 'Bro, drive faster, you\'re late for the lecture')
        } else {
            cb('Fuckkk...Punctured a wheel in a car(', null)
        }
    },1500)
}
function sleepLectures(isSleepLectures, cb) {
    setTimeout(() => {
        if (isSleepLectures){
            cb(null, 'Very interesting lecture...Zzzzzzzz')
        } else {
            cb('Fuckkk...The lecturer woke me up, son of a bitch!', null)
        }
    },1000)
}
function lunch(isLunch, cb) {
    setTimeout(() => {
        if (isLunch){
            cb(null, 'Lunch: om nom nom nom')
        } else {
            cb('Fuckkk...No money on credit(', null)
        }
    },1000)
}
function goHome(isGoHome, cb) {
    setTimeout(() => {
        if (isGoHome){
            cb(null, 'Hooray, goooo home')
        } else {
            cb('Traffic jams...This is Lviv, baby', null)
        }
    },1500)
}
function study(isStudy, cb) {
    setTimeout(() => {
        if (isStudy){
            cb(null, 'Study bro and remember the mind is your best muscle')
        } else {
            cb('I\'m lazy to do it', null)
        }
    },1000)
}
function dinner(isDinner, cb) {
    setTimeout(() => {
        if (isDinner) {
            cb(null, 'Dinner: om nom nom nom')
        } else {
            cb('The refrigerator is empty again, I forgot to buy the products', null)
        }
    },1000)
}
function lookLesson(isLookLesson, cb) {
    setTimeout(() => {
        if (isLookLesson){
            cb(null, 'Look lesson, Vitya thank you!!!')
        } else {
            cb('Fuckkk....No internet(', null)
        }
    },1000)
}
function goToBed(isGoToBed, cb) {
    setTimeout(() => {
        if (isGoToBed){
            cb(null, 'Good night, baby')
        } else {
            cb('Watch movie', null)
        }
    }, 1000)
}

wakeUp(true, (error, message) => {
    if (error){
        console.log(error);
    } else {
        console.log(message);


        goRun(true, (error, message) => {
            if (error){
                console.log(error)
            } else {
                console.log(message);


                takeShower(true, (error, message) =>{
                    if (error){
                        console.log(error)
                    } else {
                        console.log(message);


                        breakfast(true, (error, message) => {
                            if (error){
                                console.log(error)
                            } else {
                                console.log(message);


                                dressUp(true, (error, message) => {
                                    if (error){
                                        console.log(error)
                                    } else {
                                        console.log(message);


                                        goUniversity(true, (error, message) => {
                                            if (error){
                                                console.log(error)
                                            } else {
                                                console.log(message);


                                                sleepLectures(true, (error, message) => {
                                                    if (error){
                                                        console.log(error)
                                                    } else {
                                                        console.log(message);


                                                        lunch(true, (error, message) => {
                                                            if (error){
                                                                console.log(error)
                                                            } else {
                                                                console.log(message);


                                                                goHome(true, (error, message) => {
                                                                    if (error){
                                                                        console.log(error)
                                                                    } else {
                                                                        console.log(message);


                                                                        study(true, (error, message) => {
                                                                            if (error){
                                                                                console.log(error)
                                                                            } else {
                                                                                console.log(message);


                                                                                dinner(true, (error, message) => {
                                                                                    if (error){
                                                                                        console.log(error)
                                                                                    } else {
                                                                                        console.log(message);

                                                                                        lookLesson(true, (error, message) => {
                                                                                            if (error){
                                                                                                console.log(error)
                                                                                            } else {
                                                                                                console.log(message);


                                                                                                goToBed(true, (error, message) => {
                                                                                                    if (error){
                                                                                                        console.log(error)
                                                                                                    } else {
                                                                                                        console.log(message)
                                                                                                    }
                                                                                                })
                                                                                            }
                                                                                        })
                                                                                    }
                                                                                })
                                                                            }
                                                                        })
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
});








// function  wakeUp(message) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (true){
//             resolve(message);
//             } else {
//             reject('Wake up piece of shit!');
//             }
//         }, 1000);
//     })
//  }
// function goRun(message) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (true){
//                 resolve(message);
//             } else {
//                 reject('Fuckkk...The weather is very terrible(');
//             }
//         },1500);
//     })
// }
// function takeShower(message) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (true){
//                 resolve(message);
//             } else {
//                 reject('Ooo shit, no water again...')
//             }
//         },1000)
//     })
// }
// function breakfast(message) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (true){
//                 resolve(message);
//             } else {
//                 reject('Fuckkk...Refrigerator is empty...(')
//             }
//         },1000)
//     })
// }
// function dressUp(message) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (true){
//                 resolve(message);
//             } else {
//                 reject ('Fuckkk...Clothes are not dry(')
//             }
//         }, 1000)
//     })
// }
// function goUniversity(message) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (true){
//                 resolve(message)
//             } else {
//                 reject('Fuckkk...Punctured a wheel in a car(')
//             }
//         },1500)
//     })
// }
// function sleepLectures(message) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (true){
//                 resolve(message)
//             } else {
//                 reject('Fuckkk...The lecturer woke me up, son of a bitch!')
//             }
//         },1000)
//     })
// }
// function lunch(message) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (true){
//                 resolve(message)
//             } else {
//                 reject('Fuckkk...No money on credit(')
//             }
//         },1000)
//     })
// }
// function goHome(message) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (true){
//                 resolve(message)
//             } else {
//                 reject("Traffic jams...This is Lviv, baby")
//             }
//         },1500)
//     })
// }
// function study(message) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (true){
//                 resolve(message)
//             } else {
//                 reject( 'I\'m lazy to do it')
//             }
//         },1000)
//     })
// }
// function dinner(message) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (true){
//                 resolve(message)
//             } else {
//                 reject('The refrigerator is empty again, I forgot to buy the products')
//             }
//         }, 1000)
//     })
// }
// function lookLesson(message) {
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             if (true){
//                 resolve(message)
//             } else {
//                 reject('Fuckkk....No internet(')
//             }
//         },1000)
//     })
// }
// function  goToBed(message) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (true){
//                 resolve(message)
//             } else {
//                 reject('Watch movie')
//             }
//         },1000)
//     })
// }
//
//
// let promise = wakeUp('Broo, wake up!');
// promise
//     .then(value => {
//         console.log(value);
//         return goRun('Run, run Vasya run,  ne ostavʹ shansa musoram')
//     })
//     .then(value => {
//         console.log(value);
//         return takeShower('Time wash up balls, bro')
//     })
//     .then(value => {
//         console.log(value);
//         return breakfast('Breakfast: om nom nom nom')
//     })
//     .then(value => {
//         console.log(value);
//         return dressUp('Bro, get dressed')
//     })
//     .then(value => {
//         console.log(value);
//         return goUniversity('Bro, drive faster, you\'re late for the lecture')
//     })
//     .then(value => {
//         console.log(value);
//         return sleepLectures('Very interesting lecture...Zzzzzzzz')
//     })
//     .then(value => {
//         console.log(value);
//         return lunch('Lunch: om nom nom nom')
//     })
//     .then(value => {
//         console.log(value);
//         return goHome('Hooray, goooo home')
//     })
//     .then(value => {
//         console.log(value);
//         return study('Study bro and remember the mind is your best muscle')
//     })
//     .then(value => {
//         console.log(value);
//         return dinner('Dinner: om nom nom nom')
//     })
//     .then(value => {
//         console.log(value);
//         return lookLesson('Look lesson, Vitya thank you!!!')
//     })
//     .then(value => {
//         console.log(value);
//         return goToBed('Good night, baby')
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(error => console.log(error));