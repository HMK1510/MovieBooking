"use client"
import React from 'react'
import './SelectSeat.css'
import Link from 'next/link';

const page = () => {

    const movie = {
        moviename:"Spiderman",
        date: new Date(),
        language: 'English',
        type: 'Action/Super Hero',
        screens: [
            {
                name: 'Screen 1',
                location: 'AKS Cinemas, Van Hanh Mall, District 10'
            },
            {
                name: 'Screen 2',
                location: 'AKS Cinemas, Van Hanh Mall, District 10'
            },
            {
                name: 'Screen 3',
                location: 'AKS Cinemas, Van Hanh Mall, District 10'
            }
        ]
    }

    const screen = {
        name: 'Screen 1',
        location: 'AKS Cinemas, Van Hanh Mall, District 10',
        timeslots: [
            {
                time: '10:00 AM',
                seats: [
                    {
                        type: 'platinum',
                        rows: [
                            {
                                rowname: 'H',
                                cols: [
                                    //col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    //col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'G',
                                cols: [
                                    //col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    //col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'F',
                                cols: [
                                    //col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    //col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 500
                    },
                    {
                        type: 'gold',
                        rows: [
                            {
                                rowname: 'E',
                                cols: [
                                    //col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    //col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'D',
                                cols: [
                                    //col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    //col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'C',
                                cols: [
                                    //col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    //col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 300
                    },
                    {
                        type: 'silver',
                        rows: [
                            {
                                rowname: 'B',
                                cols: [
                                    //col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    //col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'A',
                                cols: [
                                    //col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    //col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 150
                    }
                ],
            },
            {
                time: '1:00 PM',
                seats: [
                    {
                        type: 'platinum',
                        rows: [
                            {
                                rowname: 'H',
                                cols: [
                                    //col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    //col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 500
                    },
                    {
                        type: 'gold',
                        rows: [
                            {
                                rowname: 'E',
                                cols: [
                                    //col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    //col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 300
                    },
                    {
                        type: 'silver',
                        rows: [
                            {
                                rowname: 'B',
                                cols: [
                                    //col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    //col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 150
                    }
                ],
            },
            {
                time: '4:00 PM',
                seats: [
                    {
                        type: 'platinum',
                        rows: [
                            {
                                rowname: 'H',
                                cols: [
                                    //col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    //col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 500
                    },
                    {
                        type: 'gold',
                        rows: [
                            {
                                rowname: 'E',
                                cols: [
                                    //col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    //col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 300
                    },
                    {
                        type: 'silver',
                        rows: [
                            {
                                rowname: 'B',
                                cols: [
                                    //col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    //col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 150
                    }
                ],
            },
            {
                time: '6:00 PM',
                seats: [
                    {
                        type: 'platinum',
                        rows: [
                            {
                                rowname: 'H',
                                cols: [
                                    //col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    //col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 500
                    },
                    {
                        type: 'gold',
                        rows: [
                            {
                                rowname: 'E',
                                cols: [
                                    //col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    //col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 300
                    },
                    {
                        type: 'silver',
                        rows: [
                            {
                                rowname: 'B',
                                cols: [
                                    //col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    //col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seats',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 150
                    }
                ],
            },
        ]
    }

    const generateSeatlayout = () => {
        const x = screen.timeslots.findIndex((t:any) => t.time === selectedTime.time)
        return screen.timeslots[x].seats.map((seatType, index) => (
            <div className='seat-type' key={index}>
                <h2>{seatType.type} - {seatType.price}.000 VNĐ</h2>

                <div className='seat-rows'>
                    {
                        seatType.rows.map((row, rowIndex) => (
                            <div className='seat-row' key={rowIndex}>
                                <p className='rowname'>{row.rowname}</p>

                                <div className='seat-cols'>
                                    {
                                        row.cols.map((col, colIndex) => (
                                            <div className='seat-col' key={colIndex}>
                                                {col.seats.map((seat, seatIndex) => (
                                                    <div key={seatIndex}>
                                                        {
                                                            seat.status == 'available' &&
                                                            <span className={
                                                                selectedSeats.find((s: any) => {
                                                                    return s.row === row.rowname && s.seat_id === seat.seat_id && s.col === colIndex
                                                                }) ? "seat-selected" : "seat-available"
                                                            }
                                                            onClick={() => selectedselectSeat({
                                                                row: row.rowname,
                                                                col: colIndex,
                                                                seat_id: seat.seat_id,
                                                                price: seatType.price 
                                                            })}>
                                                                {seatIndex+1}
                                                            </span>
                                                        }
                                                        {
                                                            seat.status == 'not-available' &&
                                                            <span className='seat-unavailable'>
                                                                {seatIndex+1}
                                                            </span>
                                                        }
                                                    </div>
                                                ))}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        ))
    }
        
    const [selectedTime, setSelectedTime] = React.useState<any>(screen.timeslots[0])

    const[selectedSeats, setselectedSeats] = React.useState<any[]>([])

    const selectedselectSeat = (seat: any) => {
        console.log(seat)
        const isselected = selectedSeats.findIndex((s:any) => {
            return s.row === seat.row && s.col === seat.col && s.seat_id === seat.seat_id 
        })

        if(isselected) {
            setselectedSeats(selectedSeats.filter((s: any) => s.seat_id !== seat.seat_id))
        }else{
            setselectedSeats([...selectedSeats, seat])
            
        }
    }

  return (
    <div className='selectseatpage'>
        <div className='s1'>
            <div className='head'>
                <h1>{movie.moviename} - {movie.language}</h1>
                <h3>{movie.type}</h3>
            </div> 
        </div>
        
        <div className='selectseat'>
            <div className='timecont'>
                {screen.timeslots.map((time: any, index: number) => (
                    <h3 className={selectedTime.time === time.time ? 'time selected' : 'time'}
                        onClick={() => {
                            setSelectedTime(time)
                            //
                        }}

                        key={index}
                    >
                        {time.time}
                    </h3>
                ))}
            </div>
            <div className='indicators'>
                <div>
                    <span className='seat-unavailable'></span>
                    <p>Not available</p>
                </div>
                <div>
                    <span className='seat-available'></span>
                    <p>Available</p>
                </div>
                <div>
                    <span className='seat-selected'></span>
                    <p>Selected</p>
                </div>
            </div>
            {generateSeatlayout()}
            <div className='totalcont'></div>
        </div>
    </div>
  )
}

export default page
