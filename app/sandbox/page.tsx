'use client'

const handleSubmit= async()=>{
    await fetch('/api/email/send-email' , {
        method : "POST"
    })
}

const Sandbox = () => {
    return ( <div className="flex flex-col gap-3">
        <h1>Hello World!</h1>
        <span>Test email api</span>
        <button onClick={()=> handleSubmit()} className="border rounded p-3 bg-black text-white w-fit">
            Test Email
        </button>
    </div> );
}
 
export default Sandbox;