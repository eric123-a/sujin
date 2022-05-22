import { useRequest } from 'ahooks';
import { getBlogList } from '@/service/service';
import { useEffect, useState } from 'react';
import { useLocation } from 'umi'



export default function detail() {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const query = useQuery();
    const [blogcontent, setblogcontent] = useState([])
    const { loading, run } = useRequest(getBlogList, {
        manual: true,
        onSuccess: (res) => {
            setblogcontent(res.data[0])
        }
    });
    useEffect(() => {
        run({})
    }, [])
    return (
        <div>
            <div></div>
        </div>
    )
}