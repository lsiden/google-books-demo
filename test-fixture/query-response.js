// response to https://www.googleapis.com/books/v1/volumes?q=intitle:dickens+inauthor:dickens

const response = {
    "kind": "books#volumes",
    "totalItems": 300,
    "items": [{
        "kind": "books#volume",
        "id": "cjsPAAAAQAAJ",
        "etag": "7kxksFd5soU",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/cjsPAAAAQAAJ",
        "volumeInfo": {
            "title": "(Nelson's new Dickens).",
            "authors": [
                "Charles Dickens"
            ],
            "publishedDate": "1911",
            "industryIdentifiers": [{
                "type": "OTHER",
                "identifier": "OXFORD:555082139"
            }],
            "readingModes": {
                "text": false,
                "image": false
            },
            "printType": "BOOK",
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "preview-1.0.0",
            "language": "en",
            "previewLink": "http://books.google.com/books?id=cjsPAAAAQAAJ&dq=intitle:dickens+inauthor:dickens&hl=&cd=1&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=cjsPAAAAQAAJ&dq=intitle:dickens+inauthor:dickens&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Nelson_s_new_Dickens.html?hl=&id=cjsPAAAAQAAJ"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
        "accessInfo": {
            "country": "US",
            "viewability": "NO_PAGES",
            "embeddable": false,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": false
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=cjsPAAAAQAAJ&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "NONE",
            "quoteSharingAllowed": false
        }
    }, {
        "kind": "books#volume",
        "id": "N8FEAAAAYAAJ",
        "etag": "rPsVmlVmeS0",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/N8FEAAAAYAAJ",
        "volumeInfo": {
            "title": "The Charles Dickens Birthday Book",
            "authors": [
                "Charles Dickens"
            ],
            "publishedDate": "1886",
            "industryIdentifiers": [{
                "type": "OTHER",
                "identifier": "UVA:X004620146"
            }],
            "readingModes": {
                "text": false,
                "image": true
            },
            "pageCount": 397,
            "printType": "BOOK",
            "categories": [
                "Birthday books"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.1.1.0.full.1",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=N8FEAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=N8FEAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=N8FEAAAAYAAJ&printsec=frontcover&dq=intitle:dickens+inauthor:dickens&hl=&cd=2&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=N8FEAAAAYAAJ&source=gbs_api",
            "canonicalVolumeLink": "https://market.android.com/details?id=book-N8FEAAAAYAAJ"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "FREE",
            "isEbook": true,
            "buyLink": "https://play.google.com/store/books/details?id=N8FEAAAAYAAJ&rdid=book-N8FEAAAAYAAJ&rdot=1&source=gbs_api"
        },
        "accessInfo": {
            "country": "US",
            "viewability": "ALL_PAGES",
            "embeddable": true,
            "publicDomain": true,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": false,
                "downloadLink": "http://books.google.com/books/download/The_Charles_Dickens_Birthday_Book.epub?id=N8FEAAAAYAAJ&hl=&output=epub&source=gbs_api"
            },
            "pdf": {
                "isAvailable": true,
                "downloadLink": "http://books.google.com/books/download/The_Charles_Dickens_Birthday_Book.pdf?id=N8FEAAAAYAAJ&hl=&output=pdf&sig=ACfU3U2lIIrIUSnn5zY8ZHY5uU5U2JfcOg&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=N8FEAAAAYAAJ&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "FULL_PUBLIC_DOMAIN",
            "quoteSharingAllowed": false
        }
    }, {
        "kind": "books#volume",
        "id": "xXkL0CVKblIC",
        "etag": "rWB3z+y9yo4",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/xXkL0CVKblIC",
        "volumeInfo": {
            "title": "A Christmas Dinner by Charles Dickens",
            "publisher": "Red Rock Press",
            "publishedDate": "2014",
            "industryIdentifiers": [{
                "type": "ISBN_13",
                "identifier": "9781933176482"
            }, {
                "type": "ISBN_10",
                "identifier": "1933176482"
            }],
            "readingModes": {
                "text": true,
                "image": true
            },
            "printType": "BOOK",
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "1.1.1.0.preview.3",
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=xXkL0CVKblIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=xXkL0CVKblIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=xXkL0CVKblIC&printsec=frontcover&dq=intitle:dickens+inauthor:dickens&hl=&cd=3&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=xXkL0CVKblIC&source=gbs_api",
            "canonicalVolumeLink": "https://market.android.com/details?id=book-xXkL0CVKblIC"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "FOR_SALE",
            "isEbook": true,
            "listPrice": {
                "amount": 7.99,
                "currencyCode": "USD"
            },
            "retailPrice": {
                "amount": 6.15,
                "currencyCode": "USD"
            },
            "buyLink": "https://play.google.com/store/books/details?id=xXkL0CVKblIC&rdid=book-xXkL0CVKblIC&rdot=1&source=gbs_api",
            "offers": [{
                "finskyOfferType": 1,
                "listPrice": {
                    "amountInMicros": 7990000.0,
                    "currencyCode": "USD"
                },
                "retailPrice": {
                    "amountInMicros": 6150000.0,
                    "currencyCode": "USD"
                },
                "giftable": true
            }]
        },
        "accessInfo": {
            "country": "US",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/A_Christmas_Dinner_by_Charles_Dickens-sample-epub.acsm?id=xXkL0CVKblIC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/A_Christmas_Dinner_by_Charles_Dickens-sample-pdf.acsm?id=xXkL0CVKblIC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=xXkL0CVKblIC&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
        }
    }, {
        "kind": "books#volume",
        "id": "S6qlNAEACAAJ",
        "etag": "+esTOnLk46w",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/S6qlNAEACAAJ",
        "volumeInfo": {
            "title": "Charles Dickens' a Christmas Carol",
            "authors": [
                "Charles Dickens",
                "Stephen L. Stern"
            ],
            "publisher": "Markosia Enterprises",
            "publishedDate": "2012",
            "description": "The 1843 first edition of this classic tale is reissued here with the original illustrations by Punch caricaturist John Leech.",
            "industryIdentifiers": [{
                "type": "ISBN_10",
                "identifier": "1905692927"
            }, {
                "type": "ISBN_13",
                "identifier": "9781905692927"
            }],
            "readingModes": {
                "text": false,
                "image": false
            },
            "pageCount": 72,
            "printType": "BOOK",
            "categories": [
                "Graphic novels"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "preview-1.0.0",
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=S6qlNAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=S6qlNAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=S6qlNAEACAAJ&dq=intitle:dickens+inauthor:dickens&hl=&cd=4&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=S6qlNAEACAAJ&dq=intitle:dickens+inauthor:dickens&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Charles_Dickens_a_Christmas_Carol.html?hl=&id=S6qlNAEACAAJ"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
        "accessInfo": {
            "country": "US",
            "viewability": "NO_PAGES",
            "embeddable": false,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": false
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=S6qlNAEACAAJ&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "NONE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "The 1843 first edition of this classic tale is reissued here with the original illustrations by Punch caricaturist John Leech."
        }
    }, {
        "kind": "books#volume",
        "id": "qeA5AAAAMAAJ",
        "etag": "ZKPkIBxQ0aw",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/qeA5AAAAMAAJ",
        "volumeInfo": {
            "title": "The Letters of Charles Dickens: 1836 to 1870",
            "authors": [
                "Charles Dickens"
            ],
            "publishedDate": "1881",
            "industryIdentifiers": [{
                "type": "OTHER",
                "identifier": "UOM:39015005347581"
            }],
            "readingModes": {
                "text": false,
                "image": true
            },
            "printType": "BOOK",
            "categories": [
                "Authors, English"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.1.1.0.full.1",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=qeA5AAAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=qeA5AAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=qeA5AAAAMAAJ&pg=PP1&dq=intitle:dickens+inauthor:dickens&hl=&cd=5&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=qeA5AAAAMAAJ&source=gbs_api",
            "canonicalVolumeLink": "https://market.android.com/details?id=book-qeA5AAAAMAAJ"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "FREE",
            "isEbook": true,
            "buyLink": "https://play.google.com/store/books/details?id=qeA5AAAAMAAJ&rdid=book-qeA5AAAAMAAJ&rdot=1&source=gbs_api"
        },
        "accessInfo": {
            "country": "US",
            "viewability": "ALL_PAGES",
            "embeddable": true,
            "publicDomain": true,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": false,
                "downloadLink": "http://books.google.com/books/download/The_Letters_of_Charles_Dickens_1836_to_1.epub?id=qeA5AAAAMAAJ&hl=&output=epub&source=gbs_api"
            },
            "pdf": {
                "isAvailable": true,
                "downloadLink": "http://books.google.com/books/download/The_Letters_of_Charles_Dickens_1836_to_1.pdf?id=qeA5AAAAMAAJ&hl=&output=pdf&sig=ACfU3U2nhdLvy6X29_P237IWVUKjqVrdvg&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=qeA5AAAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "FULL_PUBLIC_DOMAIN",
            "quoteSharingAllowed": false
        }
    }, {
        "kind": "books#volume",
        "id": "DPpKAAAAMAAJ",
        "etag": "XSLKz3dOBM4",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/DPpKAAAAMAAJ",
        "volumeInfo": {
            "title": "A Dickens pilgrimage",
            "authors": [
                "Charles Dickens"
            ],
            "publishedDate": "1914",
            "industryIdentifiers": [{
                "type": "OTHER",
                "identifier": "UOM:39015047760205"
            }],
            "readingModes": {
                "text": false,
                "image": false
            },
            "pageCount": 93,
            "printType": "BOOK",
            "categories": [
                "England"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.1.1.0.preview.0",
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=DPpKAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=DPpKAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=DPpKAAAAMAAJ&dq=intitle:dickens+inauthor:dickens&hl=&cd=6&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=DPpKAAAAMAAJ&dq=intitle:dickens+inauthor:dickens&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/A_Dickens_pilgrimage.html?hl=&id=DPpKAAAAMAAJ"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
        "accessInfo": {
            "country": "US",
            "viewability": "NO_PAGES",
            "embeddable": false,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": false
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=DPpKAAAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "NONE",
            "quoteSharingAllowed": false
        }
    }, {
        "kind": "books#volume",
        "id": "ymA2AQAAMAAJ",
        "etag": "PJ6QvOgX8jY",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/ymA2AQAAMAAJ",
        "volumeInfo": {
            "title": "Smike, from the Nicholas Nickleby of Charles Dickens",
            "authors": [
                "Charles Dickens"
            ],
            "publishedDate": "1866",
            "industryIdentifiers": [{
                "type": "OTHER",
                "identifier": "MINN:31951002376904W"
            }],
            "readingModes": {
                "text": false,
                "image": true
            },
            "pageCount": 174,
            "printType": "BOOK",
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.1.1.0.full.1",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=ymA2AQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=ymA2AQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=ymA2AQAAMAAJ&pg=PP1&dq=intitle:dickens+inauthor:dickens&hl=&cd=7&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=ymA2AQAAMAAJ&source=gbs_api",
            "canonicalVolumeLink": "https://market.android.com/details?id=book-ymA2AQAAMAAJ"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "FREE",
            "isEbook": true,
            "buyLink": "https://play.google.com/store/books/details?id=ymA2AQAAMAAJ&rdid=book-ymA2AQAAMAAJ&rdot=1&source=gbs_api"
        },
        "accessInfo": {
            "country": "US",
            "viewability": "ALL_PAGES",
            "embeddable": true,
            "publicDomain": true,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": false
            },
            "pdf": {
                "isAvailable": true,
                "downloadLink": "http://books.google.com/books/download/Smike_from_the_Nicholas_Nickleby_of_Char.pdf?id=ymA2AQAAMAAJ&hl=&output=pdf&sig=ACfU3U0W9VZVPQx4lG49hZ5t1GUfHMX4NQ&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=ymA2AQAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "FULL_PUBLIC_DOMAIN",
            "quoteSharingAllowed": false
        }
    }, {
        "kind": "books#volume",
        "id": "X4d3PRch2c4C",
        "etag": "GU561q94/TU",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/X4d3PRch2c4C",
        "volumeInfo": {
            "title": "The Girls of Dickens Retold",
            "authors": [
                "Charles Dickens"
            ],
            "publisher": "Wildside Press LLC",
            "publishedDate": "2011-10",
            "description": "Charles John Huffam Dickens (1812-1870) was the most popular English novelist of the Victorian era, creating some of English literature's most iconic characters. This volume collects his young heroines and summarizes their stories.",
            "industryIdentifiers": [{
                "type": "ISBN_10",
                "identifier": "1434434451"
            }, {
                "type": "ISBN_13",
                "identifier": "9781434434456"
            }],
            "readingModes": {
                "text": false,
                "image": false
            },
            "pageCount": 132,
            "printType": "BOOK",
            "categories": [
                "Juvenile Fiction"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "preview-1.0.0",
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=X4d3PRch2c4C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=X4d3PRch2c4C&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=X4d3PRch2c4C&dq=intitle:dickens+inauthor:dickens&hl=&cd=8&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=X4d3PRch2c4C&dq=intitle:dickens+inauthor:dickens&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/The_Girls_of_Dickens_Retold.html?hl=&id=X4d3PRch2c4C"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
        "accessInfo": {
            "country": "US",
            "viewability": "NO_PAGES",
            "embeddable": false,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": false
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=X4d3PRch2c4C&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "NONE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "Charles John Huffam Dickens (1812-1870) was the most popular English novelist of the Victorian era, creating some of English literature&#39;s most iconic characters. This volume collects his young heroines and summarizes their stories."
        }
    }, {
        "kind": "books#volume",
        "id": "9VFCAQAAMAAJ",
        "etag": "C4sx/4wTPjo",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/9VFCAQAAMAAJ",
        "volumeInfo": {
            "title": "The Complete Works of Charles Dickens ...: Old curiosity shop : reprinted pieces",
            "authors": [
                "Charles Dickens"
            ],
            "publishedDate": "1902",
            "industryIdentifiers": [{
                "type": "OTHER",
                "identifier": "UIUC:30112077577259"
            }],
            "readingModes": {
                "text": false,
                "image": true
            },
            "printType": "BOOK",
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "full-1.0.0",
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=9VFCAQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=9VFCAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=9VFCAQAAMAAJ&pg=PP1&dq=intitle:dickens+inauthor:dickens&hl=&cd=9&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=9VFCAQAAMAAJ&source=gbs_api",
            "canonicalVolumeLink": "https://market.android.com/details?id=book-9VFCAQAAMAAJ"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "FREE",
            "isEbook": true,
            "buyLink": "https://play.google.com/store/books/details?id=9VFCAQAAMAAJ&rdid=book-9VFCAQAAMAAJ&rdot=1&source=gbs_api"
        },
        "accessInfo": {
            "country": "US",
            "viewability": "ALL_PAGES",
            "embeddable": true,
            "publicDomain": true,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": false
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=9VFCAQAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "FULL_PUBLIC_DOMAIN",
            "quoteSharingAllowed": false
        }
    }, {
        "kind": "books#volume",
        "id": "5H0PAAAAQAAJ",
        "etag": "LXIVZculE7o",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/5H0PAAAAQAAJ",
        "volumeInfo": {
            "title": "Wit and wisdom from Dickens, selected by A.R. Fossard",
            "authors": [
                "Charles Dickens"
            ],
            "publishedDate": "1912",
            "industryIdentifiers": [{
                "type": "OTHER",
                "identifier": "OXFORD:590300801"
            }],
            "readingModes": {
                "text": false,
                "image": false
            },
            "printType": "BOOK",
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.1.1.0.preview.0",
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=5H0PAAAAQAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=5H0PAAAAQAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=5H0PAAAAQAAJ&dq=intitle:dickens+inauthor:dickens&hl=&cd=10&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=5H0PAAAAQAAJ&dq=intitle:dickens+inauthor:dickens&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Wit_and_wisdom_from_Dickens_selected_by.html?hl=&id=5H0PAAAAQAAJ"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
        "accessInfo": {
            "country": "US",
            "viewability": "NO_PAGES",
            "embeddable": false,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": false
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=5H0PAAAAQAAJ&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "NONE",
            "quoteSharingAllowed": false
        }
    }]
}

export default response
