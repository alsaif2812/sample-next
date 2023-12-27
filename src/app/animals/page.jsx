"use client";
import { useEffect, useState } from 'react';

export default function Page() {
          const [users, setUsers] = useState([]);

          useEffect(() => {
                    const fetchData = async () => {
                              try {
                                        const response = await fetch("https://dummyjson.com/users");
                                        const data = await response.json();
                                        console.log(data);

                                        if (Array.isArray(data)) {
                                                  setUsers(data);
                                        } else {
                                                  console.error("API response is not an array:", data);
                                        }
                              } catch (error) {
                                        console.error("Error fetching data:", error);
                              }
                    };

                    fetchData();
          }, []);

          return (
                    <>
                              {users.map((user) => (
                                        <div className="bg-white shadow-md rounded-md p-6 max-w-md mx-auto my-6" key={user.id}>
                                                  <img
                                                            className="w-20 h-20 rounded-full mx-auto mb-4"
                                                            src={user.image}
                                                            alt={`${user.firstName} ${user.lastName}`}
                                                  />

                                                  <h2 className="text-2xl font-semibold text-center mb-2">
                                                            {user.firstName} {user.lastName}
                                                  </h2>

                                                  <div className="flex justify-center items-center mb-4">
                                                            <span className="mr-2">Age: {user.age}</span>
                                                            <span className="mr-2">Gender: {user.gender}</span>
                                                            <span>Blood Group: {user.bloodGroup}</span>
                                                  </div>

                                                  <div className="border-t pt-4">
                                                            <p className="text-sm text-gray-600">
                                                                      Hair: {user.hair.color} ({user.hair.type})
                                                            </p>
                                                            <p className="text-sm text-gray-600">Email: {user.email}</p>
                                                            <p className="text-sm text-gray-600">
                                                                      Address: {user.address.address}, {user.address.city}, {user.address.state} {user.address.postalCode}
                                                            </p>
                                                            <p className="text-sm text-gray-600">University: {user.university}</p>
                                                            <p className="text-sm text-gray-600">Company: {user.company.name}</p>
                                                  </div>
                                        </div>
                              ))}
                    </>
          );
}
