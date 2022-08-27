window.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id")
      if (entry.intersectionRatio > 0) {
        document.querySelector(`nav a[href="#${id}"]`).classList.add("active-nav")
      } else {
        document.querySelector(`nav a[href="#${id}"]`).classList.remove("active-nav")
      }
    })
  })

  // Track all sections that have an `id` applied
  document.querySelectorAll("span[id]").forEach((section) => {
    observer.observe(section)
  })
})
