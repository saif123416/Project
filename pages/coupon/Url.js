import Link from 'next/link';
import PrimarySearchAppBar from '../components/Navbar'
import Footer from '../components/Footer'
export const getStaticProps = async () => {
    const res = await fetch("https://www.couponoutlet.org/api/posts");
    const data = await res.json();
    
    return {
        props: {
            data,
        },
    };
};

const coupon = ({ data }) => {

    return (
        <>
            <PrimarySearchAppBar />
            {data.map((curElem)=> {
                return (
                    <div key={curElem.Id}>
                        <h2>{curElem.Name}</h2>
                        <Link href={`/coupon/${cur.Website_Url}`}>
                            <h3>thus 29</h3>
                        </Link>
                    </div>
                );
            })}
            <Footer />
        </>
    );
}
export default coupon;
