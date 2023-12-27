"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Page() {
          const [products, setProducts] = useState([]);

          useEffect(() => {
                    const fetchData = async () => {
                              try {
                                        const response = await fetch("https://dummyjson.com/products");
                                        const data = await response.json();
                                        console.log(data);
                                        setProducts(data.products);
                              } catch (error) {
                                        console.error("Error fetching data:", error);
                              }
                    };

                    fetchData();
          }, []);

          return (
                    <div>


                              <div className='bg-gray-500 p-20'>
                                        <Link href='/' className="py-2 px-6 bg-black  rounded-lg font-bold text-white capitalize mx-5">Go to home</Link>
                              </div>                              <div className='bg-black grid grid-cols-4 '>
                                        {products.map((item) => (
                                                  <>
                                                            <section className="text-gray-600 body-font " id={item.id}>
                                                                      <div className="container px-5 py-10 mx-auto ">

                                                                                <div className="flex flex-wrap m-4">
                                                                                          <div className="p-4">
                                                                                                    <div className="bg-gray-100  rounded-lg">
                                                                                                              <div className='p-4'>
                                                                                                                        <img className=" rounded-lg w-full object-cover object-center mb-6 cursor-pointer" src={item.thumbnail} alt="content" />
                                                                                                                        <div className='flex overflow-x-auto '>{
                                                                                                                                  item.images.map((url) => (
                                                                                                                                            <img className=" rounded-lg w-full object-cover object-center mb-6 cursor-pointer" src={url} alt="content" />

                                                                                                                                  ))
                                                                                                                        }</div>
                                                                                                              </div>
                                                                                                              <div className='p-6'>
                                                                                                                        <h2 className="brand">{item.brand}</h2>
                                                                                                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.title}</h2>
                                                                                                                        <p className="leading-relaxed text-base">{item.description}</p>
                                                                                                                        <p className='my-2'>ratings: {item.rating}</p>
                                                                                                                        <p className='my-2'>In Stocks: {item.stock}</p>
                                                                                                                        <h2 id='price' className='font-bold mt-5 text-xl'>${item.price}</h2>
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                </div>
                                                                      </div>
                                                            </section>
                                                  </>
                                        ))}
                              </div>
                    </div>
          );
}
