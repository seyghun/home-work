let tagged_gallery = document.querySelector(".tagged-photo")
let posts_gallery = document.querySelector(".posts-photo")
let posts_btn_p = document.querySelector(".posts-btn")
let tagged_btn_p = document.querySelector(".tagged-btn")


function tagged_active() {
    tagged_gallery.classList.remove("gallery-hiden")
    posts_gallery.classList.add("gallery-hiden")
    posts_btn_p.classList.remove("gallery-active")
    tagged_btn_p.classList.add("gallery-active")
}
function post_active() {
    posts_gallery.classList.remove("gallery-hiden")
    tagged_gallery.classList.add("gallery-hiden")
    tagged_btn_p.classList.remove("gallery-active")
    posts_btn_p.classList.add("gallery-active")

}

document.querySelector("#tagged-btn").onclick = tagged_active
document.querySelector("#posts-btn").onclick = post_active
