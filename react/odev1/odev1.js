import axios from 'axios';

async function getData(user_id) {
    try {
        const user = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
        const post = await axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);

        console.log({ user: user.data, posts: post.data });
    } catch (error) {
        console.log(error);
    }
};

export default getData;