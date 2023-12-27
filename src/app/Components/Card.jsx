import {
          Card,
          CardBody,
          CardFooter,
          Typography,
          Button,
} from "@material-tailwind/react";
import Data from '@/app/textContent/Data.json'

function CardDefault() {
          return (
                    <>
                              <div className="grid grid-cols-5 gap-4 p-4">
                                        {Data.map((val) => {
                                                  return (
                                                            <>

                                                                      <Card id={val.id} className="mt-6  border border-gray-300 rounded-md overflow-hidden shadow-md p-5 " >
                                                                                <CardBody>
                                                                                          <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl font-extrabold">
                                                                                                    {val.title}
                                                                                          </Typography>
                                                                                          <Typography>
                                                                                                    {val.description}
                                                                                          </Typography>
                                                                                </CardBody>
                                                                                <CardFooter className="pt-0">
                                                                                          <Button className="bg-blue-500 text-white hover:bg-blue-700 px-5 py-2 rounded-md mt-3">Read More</Button>
                                                                                </CardFooter>
                                                                      </Card>
                                                            </>
                                                  )

                                        })}

                              </div>
                    </>
          );
}
export default CardDefault