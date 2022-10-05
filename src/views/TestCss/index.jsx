import React from 'react'
import './css.scss'

export const TestCss = () => {

    const openToast = (typeToast = 'toast-success', title, message) => {
        const main = document.querySelector(".container-toast")

        const div_tmp = document.createElement("div")
        div_tmp.classList.add("toast", typeToast)



        div_tmp.innerHTML = `
            <div class='toast-content'>
                <span class='toast-title'>${title}</span>
                <span class='toast-message'>${message}</span>
            </div>
            <span  class='toast-close'>X</span>
        `
        const timeOutClose = setTimeout(() => {
            main.removeChild(div_tmp)
        }, 3000);

        const clickCloseToast = (event) => {
            if (event.target.closest(".toast-close")) {
                main.removeChild(div_tmp)
                clearTimeout(timeOutClose)
            }
        }
        div_tmp.onclick = clickCloseToast


        main.appendChild(div_tmp)

    }



    return (
        <>

            <div className='container'>

                <button onClick={() => { openToast('toast-success', "success", "Tạo tài khoản thành công") }} className='btn-success'>Success</button>
                <button onClick={() => { openToast('toast-error', "error", "Tạo tài khoản thất bại") }} className='btn-error'>Error</button>

                <div className='container-toast'>

                    {/* 
                    <div className='toast toast-success'>
                        <div className='toast-content'>
                            <span className='toast-title'>success</span>
                            <span className='toast-message'>Thànhhhhhhhhhh cônggggggggg</span>
                        </div>
                        <span className='toast-close'>X</span>
                    </div> */}

                </div>

            </div>
        </>
    )
}