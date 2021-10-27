/*
    const func = async () => {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => { resolve("Tamamlandı!") }, 2000);
        });

        let result = await promise;

        console.log(result);
    }

func();
*/

function getData(data) {
    return new Promise((resolve, reject) => {
        console.log("Veriler alınıyor.");

        if (data) {
            resolve("Veriler alındı.");
        }
        else {
            reject("Veriler alınamadı.");
        }
    });
};

function cleanData(receivedData) {
    return new Promise((resolve, reject) => {
        console.log("Veriler düzenleniyor.");

        if (receivedData) {
            resolve("Veriler düzenlendi.");
        }
        else {
            reject("Veriler düzenlenemedi.");
        }
    })
}

async function processData() {
    try {
        const receivedData = await getData(true);
        console.log(receivedData);
        const cleanedData = await cleanData(false);
        console.log(cleanedData);
    } catch (error) {
        console.log(error);
    }
}

processData();