
// export function Imagem() {

//   const [imagem, setImagem] = useState();
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'aplication/json',
//       authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDA3NWNmNDgyMjM1MTI4MTQ2MTNjMjVmZGRkYjk3ZSIsIm5iZiI6MTc3NzMxMTMxMS40MDcsInN1YiI6IjY5ZWY5ZTRmNDk5NTQ4MzVmMjc0NDQzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6YaNclXxLMxuD0KtUXWPEpRnbzpZF3Bp-PSCMbJXcjM'
//     }
//   }

//   function getImagemCollection() {
//     fetch('https://api.themoviedb.org/3/collection/10/images', options)
//       .then(response => response.json())
//       .then(data => setImagem(data.backdrops))
//       .catch(error => console.error('Erro ao buscar dados:', error))
//   }

//   useEffect(() => {
//     getImagemCollection();
//   }, [])

//   console.log("imagem: ", imagem)
//   return (
//     <>
//       <main className='mainImg'>
//         <img src={`https://image.tmdb.org/t/p/original${imagem?.file_path}`} alt="" />

//         {
//           imagem && (

//           )
//         }
//       </main>




//     </>
//   )
// }