# react-router-dom-v6-scroll-memory
using react-router-dom v6 to provide and adding user scrolling memory on the page whenever he pushed back or forward browser buttons, tus providing better user experience

# Main Idea
Using, CreateBrowserHistory, we are trying to add a layer over the browser history, and thus get a work around to be able to access the history, which is otherwise not directly accessible in v6.

Then, we will be storing the current page yscroll, and when user hits back to the page using browser forward or backward keys, he is scrolled to the specific display he was initially on.

We will be using session storage to store the information, don’t worry the way defined below doesn’t lead to memory leaks.😉😉


Follow the link below for better understanding 
https://knowfirm.com/how-to-set-up-scroll-memory-in-react-router-dom-v6/
