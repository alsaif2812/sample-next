"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Page() {
          const [quotes, setQuotes] = useState([]);

          useEffect(() => {
                    const fetchData = async () => {
                              try {
                                        const response = await fetch("https://dummyjson.com/quotes");
                                        const data = await response.json();
                                        console.log(data);
                                        setQuotes(data.quotes);
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
                              </div>
                              <div className='bg-[#d4c8c8] grid grid-cols-4 '>
                                        {quotes.map((item) => (
                                                  <>
                                                            <section className="text-gray-600 body-font " id={item.id}>
                                                                      <div className="container px-5 py-10 mx-auto ">

                                                                                <div className="flex flex-wrap m-4">
                                                                                          <div className="p-4">
                                                                                                    <div className="bg-gray-100  rounded-lg w-96 ">
                                                                                                              <div className='p-6'>
                                                                                                                        <h2 className="brand py-10 text-3xl font-extrabold text-blue-600">{item.quote}</h2>
                                                                                                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4 font-bold text-green-600">{item.author}</h2>

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
