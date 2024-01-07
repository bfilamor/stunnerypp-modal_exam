/* js code */
const modalTriggerBtn = document.querySelectorAll(".modal-trigger-btn");
const modal = document.getElementById("modal");
const modalText = modal.querySelector('.modal-text');
const noBtn = document.getElementById("noBtn");
const yesBtn  = document.getElementById("yesBtn");

const handleShowModal = (e) => {
    //add active class to selected modal trigger
    e.target.classList.add('active');
    //show modal
    modal.classList.add('modal-active');
    //update modal content everytime modal shows
    modalText.innerHTML = "Are you sure you want to cancel your subscription?";
}

modalTriggerBtn.forEach((trigger) => {
    //add click on every modal triggers
    trigger.addEventListener("click" , handleShowModal);
})

noBtn.addEventListener("click", () => {
    //remove active class on modal trigger
    modalTriggerBtn.forEach((trigger) => {
        trigger.classList.remove('active');
    })
    //hide modal
    modal.classList.remove('modal-active');
})

yesBtn.addEventListener("click", () => {
    //change modal text content
    modalText.innerHTML = "Subscription successfully cancelled!";
    setTimeout(() => {
        //hide modal after 2 seconds
        modal.classList.remove('modal-active');
    }, 2000)

    modalTriggerBtn.forEach((trigger) => {
        //disable active modal trigger button after clicking yes-cancel on modal
        if (trigger.classList.contains('active')) {
            trigger.removeEventListener("click" , handleShowModal);
            trigger.innerHTML = "cancelled";
            trigger.style.cursor = "default";
            trigger.classList.remove('active');
            trigger.classList.add("button");
        }
    })
})