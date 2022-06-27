import React, {useState} from 'react';
import data from './data';
import './Search.css';
const Search = () => {
    const [filter, setFilter] = useState("");
    const [isShown, setIsShown] = useState(false);
    const [isNumber, setIsNumber] = useState(0);
    function checkid(id){
        setIsNumber((current)=>id);
        setIsShown((current) => !current);
    }
    const searchText = (event) =>{
        setFilter(event.target.value);
    }
    let dataSearch = data.cardData.filter(item=>{
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    })

    return(
        <section className="py-4 container">
            <div className="row justify-content-center">

                <div className="col-12 mb-5">
                    <div className="mb-3 col-4 mx-auto text-center">
                        <h1>Search</h1>
                        <input
                            type="text"
                            className="from-control"
                            value={filter}
                            onChange={searchText.bind(this)}
                        />
                    </div>

                </div>


                {dataSearch.map((item, index)=>{
                    return(
                        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                            <div className="card p-0 overflow-hidden h-100 shadow">
                                <button><img src={item.img} className="card-img-top" onClick={()=>checkid(item.id)}/></button>
                                {isNumber==item.id && isShown &&
                                (<div id={item.id} className="card-body d-flex align-items-center justify-content-center overlay"onClick={()=>checkid(-1)}>
                                        <span>
                                            <h2 className="justify-content-center">{item.title}</h2>
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0">
                                                    <img src={item.passive_img} alt="..."/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    {item.passive_desc}
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0">
                                                    <img src={item.q_img} alt="..."/>
                                                </div>
                                                    <div class="flex-grow-1 ms-3">
                                                    {item.q_desc}
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0">
                                                    <img src={item.w_img} alt="..."/>
                                                </div>
                                                    <div class="flex-grow-1 ms-3">
                                                    {item.w_desc}
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0">
                                                    <img src={item.e_img} alt="..."/>
                                                </div>
                                                    <div class="flex-grow-1 ms-3">
                                                    {item.e_desc}
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0">
                                                    <img src={item.r_img} alt="..."/>
                                                </div>
                                                    <div class="flex-grow-1 ms-3">
                                                    {item.r_desc}
                                                </div>
                                            </div>
                                        </span>
                                </div>)}
                            </div>
                        </div> 
                    )
                })}
                    
            </div>
        </section>
    )
}

export default Search