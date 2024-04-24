import { fullBlog } from "@/app/lib";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

async function getData(slug:string){
  const query = `*[_type=='blog' &&slug.current=='${slug}']{
    "currentSlug":slug.current,
      title,
      content,
      titleImage,
  }[0]`

  const data  = await client.fetch(query)
  return data;
}

const BlogArticle = async ({params}:{params:{slug:string}}) => {
  const data:fullBlog =  await getData(params.slug)
  console.log(data);
  
  return (
    <div>
        <h1>
          <span className="block text-base  font-semibold tracking-wide uppercase text-center text-primary">Anas - Blog</span>
          <span 
          className="mt-2 block text-3xl text-center
           leading-8 font-bold tracking-tight sm:text-4xl"
          >{data.title}</span>
        </h1>
        <Image
           src={urlFor(data.titleImage).url()}
           alt={data.title}
           width={800}
           height={800}
           className="rounded-lg mt-8 border"
           priority
           />
           <div className="mt-16 prose prose-purple prose-lg dark:prose-invert prose-li:marker:text-primary
           prose-a
           ">
            <PortableText value={data.content} />
           </div>
    </div>
  )
}

export default BlogArticle