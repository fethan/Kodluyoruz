const func = async () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => { resolve("Tamamlandı!") }, 2000);
    });

    let result = await promise;

    console.log(result);
}

func();