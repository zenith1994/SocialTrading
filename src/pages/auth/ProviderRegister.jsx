import React, {useState} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ProviderRegister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [server, setServer] = useState('');
    const [fee, setFee] = useState(0);

    const serverChange = e => setServer(e.target.value);
    const passwordChange = e => setPassword(e.target.value);
    const nicknameChange = e => setNickname(e.target.value);
    const emailChange = e => setEmail(e.target.value);
    const feeChange = e => setFee(e.target.value);

    const handleClick = () => {
        // providerRegister({email, password, nickname, server, fee});
    }

    return (
        <div className="py-8 px-5 w-1/3 mx-auto mt-24 border border-black-400 bg-white rounded-xl shadow-lg space-y-2 ">
            <div className="space-y-2 ">
                <p className="text-5xl text-center">
                    <span className="bg-gradient-to-r from-amber-400 to-red-600 bg-clip-text text-transparent">MultiBank </span>
                    <span className="text-indigo-900" >Group</span>
                </p>
                <p className="text-4xl py-5 text-center">Provider Registration</p>
                <p className="text-center mb-2 text-slate-600 text-xl">Creating a new provider</p>
                <label className="block pr-6">
                    <select value={server} onChange={serverChange}  className="my-5 h-14  px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1" placeholder="Server">
                        <option value='MultiBank-Live-1'>MultiBank-Live-1</option>
                        <option value='MultiBank-Live-2'>MultiBank-Live-2</option>
                        <option value='MultiBank-MT5'>MultiBank-MT5</option>
                        <option value='MultiBank-Live-4'>MultiBank-Live-4</option>
                    </select>
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Select a server
                    </span>
                </label>
                <label className="block pr-6">
                    <input value={email} onChange={emailChange} type="email" name="accountID" className="my-5 h-14  px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1" placeholder="Email address" />
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Email
                    </span>
                </label>
                <label className="block pr-6">
                    <input value={password} onChange={passwordChange} type="password" name="password" className="my-5 h-14  px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1" placeholder="Password" />
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Password
                    </span>
                </label>
                <label className="block pr-6">
                    <input value={nickname} onChange={nicknameChange} className="my-5 h-14  px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1" placeholder="Nickname" />
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Nickname
                    </span>
                </label>
                <label className="block pr-6">
                    <input value={fee} onChange={feeChange} type="number" min="0" max="100" name="fee" className="my-5 h-14  px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1" placeholder="%" />
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Desired fee
                    </span>
                </label>
                <div className='text-center'>
                    <button onClick={handleClick} className=" bg-purple-900 text-white w-40 h-10 mt-10 rounded ">Register</button>
                </div>
                <div className="mt-5 text-center">
                    <Link className="text-xl" to="/sociallogin">Login as a client</Link>
                </div>
            </div>
        </div>
    )
}

export default connect(null, {})(ProviderRegister);