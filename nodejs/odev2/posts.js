const posts = [
    "lorem ipsum dolor sit",
    "consectetur adipiscing elit",
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "ut enim ad minim veniam",
    "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    "duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    "zzz"
];

const listPosts = () => {
    posts.sort();
    posts.map(post => {
        console.log(post);
    });
};



const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {

        posts.push(newPost);
        resolve(posts);
        reject("Bir hata oluştu.");
    })
    return promise1;
};

async function showPosts() {
    try {
        await addPost(process.argv.splice(2).join(" "));
        listPosts();

    }
    catch (error) {
        console.log(error);
    }
}
showPosts();
