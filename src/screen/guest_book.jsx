import React, { useEffect, useMemo, useState } from "react";
import Form from "../component/form/form";
import Book from "../component/book/book";
import Pagination from "../component/pagination/pagination";
import '../screen/guest_book.css'

const Guestbook = props => {

    const [page, setPage] = useState(1)
    const [totalCount, setTotalCount] = useState(0)
    const [data, setData] = useState([])
    const [d, setD] = useState([])

    const next = () => {
        if (page < totalCount)
            setPage(curr => curr + 1)
    }

    const back = () => {
        if (page !== 1)
            setPage(curr => curr - 1)
    }

    useEffect(() => {
        setD(() => data.slice(page * 3 - 3, page * 3))

    }, [page])


    useEffect(() => {

        fetch(
            `http://localhost:5000/guestbook`,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            }

        )
            .then(res => res.json())
            .then(response => {
                setData(response);
                setTotalCount(Math.ceil(response.length / 3));
                setD(response.slice(0, 3))
            })
            .catch(error => console.log(error))
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phoneNumber: e.target.phoneNumber.value,
            notes: e.target.notes.value,
        };

        fetch('http://localhost:5000/guestbook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                window.location.reload()
            })
            .catch((error) => {
                alert('Error...')
            });
    }

    return (
        <div className='guest-book'>
            <h1>Guestbook</h1>
            <Form handleSubmit={handleSubmit} />
            <div className="divider"></div>
            {
                d?.map(e => (

                    <Book key={e._id} name={e.name} date={e.date} email={e.email} phoneNumber={e.phoneNumber} notes={e.notes} />
                ))
            }
            <Pagination pagesCount={totalCount} currentPage={page} next={next} back={back} />
        </div>
    )
}
export default Guestbook