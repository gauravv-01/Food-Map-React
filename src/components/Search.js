import "./search.css"

const Search=()=>
{
    return(

        
        <>
       
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" list="input" placeholder="Foods,Restaurants,Cafes...?"/>
                <div className="searchButton">
                <button type="submit" >
                    <i class="fa fa-search"></i>
                </button>

                </div>

            </div>
        </div>
        
        <datalist id="input">
            <option value="Burger"></option>
            <option value="Pizza"></option>
            <option value="Chowmien"></option>
            <option value="Sandwich"></option>
            <option value="Pestri"></option>
            <option value="Samosa"></option>
            <option value="Pani Puri"></option>
            <option value="Fried Chiken"></option>
            <option value="Breads"></option>
            <option value="Hot Dog"></option>
            <option value="Cutlet"></option>
            <option value="Patties"></option>
            <option value="Momoj"></option>
            <option value="Macronics"></option>
            <option value="Pasta"></option>
            <option value="Panir Roll"></option>
            <option value="Pakoda"></option>
            <option value="Pav-Bhaji"></option>
            <option value="Spring Roll"></option>
            <option value="Cheeseburger"></option>
            <option value="Milkshake"></option>
            <option value="Muffin"></option>
            <option value="Donuts"></option>
            <option value="Onion Ring"></option>
            <option value="Noodle"></option>
            <option value="Lassi"></option>
            <option value="Vadda Pav"></option>
            <option value="Tikiya"></option>

        </datalist>
        </>
    

)
}

export default Search;