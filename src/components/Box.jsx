import React, {useState} from 'react'

const Box = () => {
        
    const [boxes, setBoxes] = useState({
        boxColor: "",
        boxSize: ""
    })

    const [boxList, setBoxList] = useState(
        []
    )

    const changeHandler = (e) => {
        setBoxes({...boxes, [e.target.name]: e.target.value})
    }

    const boxValidation = (e) => {
        let isValid = true
        if ( boxes.boxColor.length < 3 || boxes.boxSize < 50 || boxes.boxSize > 400 ) {
            isValid = false
            console.log("Invalid form")
        }
        return isValid
    }

    const createBox = (e) => {
        e.preventDefault();

        if(boxValidation()){
            console.log("Form complete.")
            setBoxList([...boxList, boxes])
            setBoxes({
                boxColor: "",
                boxSize: ""
            })
            console.log(boxList)}

        else{
            console.log("Invalid form.")
        }
        }

    return(
        <>
            <form action="" className='form col-md-4 mx-auto' onSubmit={ createBox }>
                <div className='form-group'>
                    {/* {
                        boxes.boxColor && boxes.boxColor.length < 1 ? <p className="text-danger">Please type in a color</p> : ""
                    } */}
                    <label className='label'>Color: </label> 
                    <input type="text" name="boxColor" onChange={changeHandler} />
                </div>
                <div className='form-group'>
                    {/* {
                        boxes.boxSize && boxes.boxSize.length < 1 ? <p className="text-danger">Please type in a size</p> : ""
                    } */}
                    <label className='label'>Size: </label> 
                    <input type="number" name="boxSize" placeholder="Select size between 50-400" onChange={changeHandler} />
                </div>
                <div>
                    <input type="submit" value="Create Box" />
                </div>
            </form>

            <div>
                {
                    boxList.map((item)=> (
                        <div style={{
                            display: 'inline-block',
                            margin: '10px',
                            height: `${item.boxSize}px`,
                            width: `${item.boxSize}px`,
                            backgroundColor: item.boxColor,
                            border: '1px',
                        }}>
                        </div>
                    ))
                }
            </div>
        </>

    );
};
export default Box;