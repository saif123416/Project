// export const getStaticPaths = async () => {
//     const res = await fetch("https://www.couponoutlet.org/api/posts");
//     const data = await res.json();

//     const paths = data.map((curElem) => {
//         return {
//             params: {
//                 Website_Url: curElem.Website,
//             },
//         };
//     });
//     return {
//         paths,
//         fallback: false,
//     };
// };
// export const getStaticProps = async (context) => {
//     const Website = context.params.Website_Url;
//     const res = await fetch(`https://www.couponoutlet.org/api/post/${Website}`);
//     const data = await res.json();

//     return {
//         props: {
//             data,
//         },
//     };
// };
// const Details = ({ data }) => {
//     return (
//         <div>
//             <div key={data.Website}>
//             <h1>{data.Name}</h1>
//             <h1>{data.Website}</h1>
//             <h1>{data.Id}</h1>
//             </div>
//         </div>
//     );
// }
// export default Details;



















// // import { useRouter } from 'next/router';

// // export async function getstaticProps() {
// //     const router = useRouter()
// //     const { id } = router.query
// //     let res = await fetch('https://www.couponoutlet.org/api/post/amazon.com')
// //     console.log("hello" + res);
// //     const posts = await res.json()
// //     return {
// //         props: {
// //         posts,
// //         },
// //   }
// // }

// // function Coupon({ posts }) {
// //     console.log( posts)
// //     if (posts) {
// //     return (
// //         <ul>
// //           {posts.map((post) => (
// //             <li>{post.title}</li>
// //           ))}
// //         </ul>
// //       )
// //     }
// //     return "no posts"
// // }
// // export default Coupon;
