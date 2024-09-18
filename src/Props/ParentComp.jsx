import React from "react";
import { ChildComp, ChildComp2, ChildComp3 } from "./ChildComp";
const ParentComp = () => {
    const handleUpdate = () => {
        console.log("update butoon is trigerred...!!");
    }
    const handleSubmit = () => {
        console.log("Submit button is trigerred..!!");
    }
    const handleReset = () => {
        console.log("Reset button is trigerred..!!");
    }
    const handleBack = () => {
        console.log("Back button is trigerred..!!");
    }
    const btnName = "Go Back"
    return (
        <div>
            <h1 className='text-center mb-4 mx-96'>ParentComp</h1>
            <div className="flex justify-center  mx-5">
                <div className="flex gap-5">
                    <ChildComp btnName="update" handleFunc={handleUpdate} />
                    <ChildComp btnName="submit" handleFunc={handleSubmit} />
                    {/* <ChildComp2 btnName="Reset" handleFunc={handleReset}/>
                    <ChildComp2 btnName=" Go Back" handleFunc={handleBack}/> */}
                    <ChildComp3 props1={{ btnName: "Reset", handleFunc: handleReset }} />
                    <ChildComp3 props1={{ btnName: btnName, handleFunc: handleBack }} />
                </div>
            </div>
        </div>
    )
}
export default ParentComp