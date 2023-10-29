import { useEffect,useState } from "react";
import axios from 'axios';

export default function useBookSearch(query,page){
    const [loading,setLoading] = useState(true);
    const [books, setBooks] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setBooks([])
    },[query])

    useEffect(()=> {
        setLoading(true)
        let cancel
        axios({
            method:'GET',
            url:`https://www.googleapis.com/books/v1/volumes?q=${query===''?'Fictional stories':query}&maxResults=40&filter=paid-ebooks&key=AIzaSyBzYWRwtdq2ClEFF2AzeMbuh0_Q1LB2jgk`,
            params:{startIndex:page},
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(
            res => {
                if(res.data.items){
                    setBooks(prevBooks => {
                        return [...new Set([...prevBooks,...res.data.items])]
                    })
                    setHasMore(res.data.totalItems)
                    setLoading(false)
                }
                else{
                    setBooks([])
                    setHasMore(res.data.totalItems)
                    setLoading(false)
                }
            }
        ).catch(e => {
            if (axios.isCancel(e)) return
        })
        return () => cancel()
    },[query,page])
    console.log(books)
    return {loading,books,hasMore}
}