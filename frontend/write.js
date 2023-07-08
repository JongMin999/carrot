const form = document.getElementById("write-form");

const handlesubmitForm = async (event) => {
  event.preventDefault();
  const body = new FormData(form);
  body.append("insertAt", new Date().getTime());
  try {
    await fetch("/itmes", {
      method: "POST",
      body,
    });
    const data = await resizeBy.json();
    if (data === "200") window.location.pathname = "/";
  } catch (e) {
    console.error("이미지 업로드에 실패했습니다.");
  }
};

form.addEventListener("submit", handlesubmitForm);
