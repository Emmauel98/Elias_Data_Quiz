import "./Rating.css";
const Rating = () => {
    const ratings = (e)=>{
        const rating = e.target.value;
        const validate = localStorage.getItem("rating");
        if (validate) {
            localStorage.removeItem("rating");
        }
        localStorage.setItem("rating", JSON.stringify(rating));
        if (e.target.checked) {
            // e.target.nextSibling.style.color = "red";
            console.log(e);
        }
        // alert(validate)
        // alert(rating)
    }
  return (
    <>
        <div className="rating">
            <input type="radio" name="rating" id="star5" value="5" onChange={ratings} />
            <label htmlFor="star5"></label>
            <input type="radio" name="rating" id="star4" value="4" onChange={ratings} />
            <label htmlFor="star4"></label>
            <input type="radio" name="rating" id="star3" value="3" onChange={ratings} />
            <label htmlFor="star3"></label>
            <input type="radio" name="rating" id="star2" value="2" onChange={ratings} />
            <label htmlFor="star2"></label>
            <input type="radio" name="rating" id="star1" value="1" onChange={ratings} />
            <label htmlFor="star1"></label>
        </div>
    </>
  )
}

export default Rating;