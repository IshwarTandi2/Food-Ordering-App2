const Contact = ()=>{
    return(<div className="py-8 px-2">
        <h1 className="px-8 text-4xl font-bold underline ">Contact us-</h1>
        <div className="form">
         <form className="p-5 m-5">
            <div><input type="text" className="p-1 my-3 border border-10 border-black" placeholder="Enter your name"/></div>
            <div><textarea type="text" className="pl-1 pr-[200px] pb-[200px] my-3 border border-10 border-black" placeholder="Write your message here...." ></textarea></div>
            <button className="font-bold px-2 mx-[120px] bg-slate-100 rounded-lg  border border-10 border-black">Submit</button>
         </form>
        </div>
    </div>)
}

export default Contact;