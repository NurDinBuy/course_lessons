const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");
// console.log(tabs);

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
};

const showTabContetn = (i = 2) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContetn();

tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                hideTabContent();
                showTabContetn(i);
            }
        });
    }
});

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

const openModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
};

modalTrigger.addEventListener("click", openModal);

const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
};

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
    if (event.target == modal) {
        closeModal();
    }
});

const forms = document.querySelectorAll("form");

const postData = (url, data) => {
    const response = fetch(url, {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: data
    })
    return response
}

const bindPostData = (form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const formData = new FormData(form)
        const obj = {}
        formData.forEach((item, i) => obj[i] = item)
        const json = JSON.stringify(obj)
        postData('server.php', json).then(data => console.log(data.json()))
    })
}

forms.forEach(item => bindPostData(item))

// const postData = (form) => {
//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//
//         const request = new XMLHttpRequest();
//         request.open("POST", "server.php");
//         request.setRequestHeader("Content-type", "application/json");
//         const formData = new FormData(form);
//         const obj = {};
//         formData.forEach((item, i) => {
//             obj[i] = item;
//         });
//         const json = JSON.stringify(obj);
//         request.send(json);
//         request.addEventListener("load", () => {
//             if (request.status === 200) {
//                 console.log(request.response);
//             } else {
//                 console.log("error");
//             }
//         });
//     });
// };


