import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function run() {
  const movie = await prisma.movie.createMany({
    data: [
      {
        "adult": false,
        "backdrop_path": "/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg",
        
        "budget": 200000000,
        "genres": [
          { "id": 35, "name": "Comedy" },
          { "id": 80, "name": "Crime" }
        ],
        "homepage": "https://movies.disney.com/cruella",
        "id": 337404,
        "imdb_id": "tt3228774",
        "original_language": "en",
        "original_title": "Cruella",
        "overview": "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella\u2019s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.",
        "popularity": 6107.84,
        "poster_path": "/hjS9mH8KvRiGHgjk6VUZH7OT0Ng.jpg",
        "production_companies": [
          {
            "id": 2,
            "logo_path": "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
            "name": "Walt Disney Pictures",
            "origin_country": "US"
          }
        ],
        "production_countries": [
          { "iso_3166_1": "US", "name": "United States of America" }
        ],
        "release_date": "2021-05-26",
        "revenue": 42600000,
        "runtime": 134,
        "spoken_languages": [
          { "english_name": "English", "iso_639_1": "en", "name": "English" }
        ],
        "status": "Released",
        "tagline": "Hello Cruel World",
        "title": "Cruella",
        "video": false,
        "vote_average": 8.8,
        "vote_count": 1474
      },
      {
        "adult": false,
        "backdrop_path": "/wwFBRyekDcKXJwP0mImRJjAnudL.jpg",
        
        "budget": 10000000,
        "genres": [{ "id": 27, "name": "Horror" }],
        "homepage": "https://www.sonypictures.com/movies/theunholy",
        "id": 632357,
        "imdb_id": "tt9419056",
        "original_language": "en",
        "original_title": "The Unholy",
        "overview": "Alice, a young hearing-impaired girl who, after a supposed visitation from the Virgin Mary, is inexplicably able to hear, speak and heal the sick. As word spreads and people from near and far flock to witness her miracles, a disgraced journalist hoping to revive his career visits the small New England town to investigate. When terrifying events begin to happen all around, he starts to question if these phenomena are the works of the Virgin Mary or something much more sinister.",
        "popularity": 3524.228,
        "poster_path": "/6wxfWZxQcuv2QgxIQKj0eYTdKTv.jpg",
        "production_companies": [
          {
            "id": 768,
            "logo_path": null,
            "name": "Ghost House Pictures",
            "origin_country": "US"
          },
          {
            "id": 3287,
            "logo_path": "/bz6GbCQQXGNE56LTW9dwgksW0Iw.png",
            "name": "Screen Gems",
            "origin_country": "US"
          },
          {
            "id": 34,
            "logo_path": "/GagSvqWlyPdkFHMfQ3pNq6ix9P.png",
            "name": "Sony Pictures",
            "origin_country": "US"
          },
          {
            "id": 6951,
            "logo_path": null,
            "name": "Chapman/Leonard Studio Equipment",
            "origin_country": ""
          }
        ],
        "production_countries": [
          { "iso_3166_1": "US", "name": "United States of America" }
        ],
        "release_date": "2021-03-31",
        "revenue": 29082988,
        "runtime": 99,
        "spoken_languages": [
          { "english_name": "English", "iso_639_1": "en", "name": "English" }
        ],
        "status": "Released",
        "tagline": "Be careful who you pray to.",
        "title": "The Unholy",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 745
      },
      {
        "adult": false,
        "backdrop_path": "/9WlJFhOSCPnaaSmsrv0B4zA8iUb.jpg",
        "belongs_to_collection": {
          "id": 809185,
          "name": "Army of the Dead Collection",
          "poster_path": null,
          "backdrop_path": null
        },
        "budget": 90000000,
        "genres": [
          { "id": 28, "name": "Action" },
          { "id": 27, "name": "Horror" },
          { "id": 53, "name": "Thriller" }
        ],
        "homepage": "https://www.netflix.com/title/81046394",
        "id": 503736,
        "imdb_id": "tt0993840",
        "original_language": "en",
        "original_title": "Army of the Dead",
        "overview": "Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble: venturing into the quarantine zone to pull off the greatest heist ever attempted.",
        "popularity": 2837.585,
        "poster_path": "/z8CExJekGrEThbpMXAmCFvvgoJR.jpg",
        "production_companies": [
          {
            "id": 114152,
            "logo_path": null,
            "name": "The Stone Quarry",
            "origin_country": "US"
          }
        ],
        "production_countries": [
          { "iso_3166_1": "US", "name": "United States of America" }
        ],
        "release_date": "2021-05-14",
        "revenue": 780000,
        "runtime": 148,
        "spoken_languages": [
          { "english_name": "English", "iso_639_1": "en", "name": "English" },
          { "english_name": "German", "iso_639_1": "de", "name": "Deutsch" },
          { "english_name": "Spanish", "iso_639_1": "es", "name": "Espa\u00f1ol" }
        ],
        "status": "Released",
        "tagline": "Always bet on the dead.",
        "title": "Army of the Dead",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 1270
      },
      {
        "adult": false,
        "backdrop_path": "/77tui163estZrQ78NBggqDB4n2C.jpg",
        
        "budget": 40000000,
        "genres": [
          { "id": 28, "name": "Action" },
          { "id": 80, "name": "Crime" }
        ],
        "homepage": "https://www.miramax.com/movie/wrath-of-man",
        "id": 637649,
        "imdb_id": "tt11083552",
        "original_language": "en",
        "original_title": "Wrath of Man",
        "overview": "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.",
        "popularity": 3456.24,
        "poster_path": "/YxopfHpsCV1oF8CZaL4M3Eodqa.jpg",
        "production_companies": [
          {
            "id": 14,
            "logo_path": "/m6AHu84oZQxvq7n1rsvMNJIAsMu.png",
            "name": "Miramax",
            "origin_country": "US"
          },
          {
            "id": 21,
            "logo_path": "/aOWKh4gkNrfFZ3Ep7n0ckPhoGb5.png",
            "name": "Metro-Goldwyn-Mayer",
            "origin_country": "US"
          },
          {
            "id": 2900,
            "logo_path": null,
            "name": "Toff Guy Films",
            "origin_country": "GB"
          },
          {
            "id": 1632,
            "logo_path": "/cisLn1YAUuptXVBa0xjq7ST9cH0.png",
            "name": "Lionsgate",
            "origin_country": "US"
          },
          {
            "id": 141391,
            "logo_path": null,
            "name": "CAA Media Finance",
            "origin_country": "US"
          }
        ],
        "production_countries": [
          { "iso_3166_1": "GB", "name": "United Kingdom" },
          { "iso_3166_1": "US", "name": "United States of America" }
        ],
        "release_date": "2021-04-22",
        "revenue": 80437520,
        "runtime": 119,
        "spoken_languages": [
          { "english_name": "English", "iso_639_1": "en", "name": "English" },
          {
            "english_name": "Russian",
            "iso_639_1": "ru",
            "name": "P\u0443\u0441\u0441\u043a\u0438\u0439"
          }
        ],
        "status": "Released",
        "tagline": "A one man army.",
        "title": "Wrath of Man",
        "video": false,
        "vote_average": 8.0,
        "vote_count": 587
      },
      {
        "adult": false,
        "backdrop_path": "/mPBI506o7gITnjoSkcyPneK9s8n.jpg",
        
        "budget": 20000000,
        "genres": [
          { "id": 28, "name": "Action" },
          { "id": 14, "name": "Fantasy" },
          { "id": 12, "name": "Adventure" }
        ],
        "homepage": "https://www.mortalkombatmovie.net",
        "id": 460465,
        "imdb_id": "tt0293429",
        "original_language": "en",
        "original_title": "Mortal Kombat",
        "overview": "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
        "popularity": 1721.224,
        "poster_path": "/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg",
        "production_companies": [
          {
            "id": 76907,
            "logo_path": "/wChlWsVgwSd4ZWxTIm8PTEcaESz.png",
            "name": "Atomic Monster",
            "origin_country": "US"
          },
          {
            "id": 8000,
            "logo_path": "/f8NwLg72BByt3eav7lX1lcJfe60.png",
            "name": "Broken Road Productions",
            "origin_country": "US"
          },
          {
            "id": 12,
            "logo_path": "/iaYpEp3LQmb8AfAtmTvpqd4149c.png",
            "name": "New Line Cinema",
            "origin_country": "US"
          }
        ],
        "production_countries": [
          { "iso_3166_1": "US", "name": "United States of America" }
        ],
        "release_date": "2021-04-07",
        "revenue": 76706000,
        "runtime": 110,
        "spoken_languages": [
          {
            "english_name": "Japanese",
            "iso_639_1": "ja",
            "name": "\u65e5\u672c\u8a9e"
          },
          { "english_name": "English", "iso_639_1": "en", "name": "English" },
          {
            "english_name": "Mandarin",
            "iso_639_1": "zh",
            "name": "\u666e\u901a\u8bdd"
          }
        ],
        "status": "Released",
        "tagline": "Get over here.",
        "title": "Mortal Kombat",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2827
      },
      {
        "adult": false,
        "backdrop_path": "/yyWNPhP1HR4BTLErHcZwIUsMBvA.jpg",
        
        "budget": 0,
        "genres": [
          { "id": 80, "name": "Crime" },
          { "id": 18, "name": "Drama" },
          { "id": 9648, "name": "Mystery" },
          { "id": 53, "name": "Thriller" }
        ],
        "homepage": "",
        "id": 823855,
        "imdb_id": "tt9013182",
        "original_language": "en",
        "original_title": "I Am All Girls",
        "overview": "A special crimes investigator forms an unlikely bond with a serial killer to bring down a global child sex trafficking syndicate.",
        "popularity": 1406.875,
        "poster_path": "/m6bUeV4mczG3z2YXXr5XDKPsQzv.jpg",
        "production_companies": [
          {
            "id": 153433,
            "logo_path": null,
            "name": "Nthibah Pictures",
            "origin_country": ""
          }
        ],
        "production_countries": [{ "iso_3166_1": "ZA", "name": "South Africa" }],
        "release_date": "2021-05-14",
        "revenue": 0,
        "runtime": 107,
        "spoken_languages": [
          { "english_name": "English", "iso_639_1": "en", "name": "English" }
        ],
        "status": "Released",
        "tagline": "",
        "title": "I Am All Girls",
        "video": false,
        "vote_average": 7.0,
        "vote_count": 89
      },
      {
        "adult": false,
        "backdrop_path": "/fPGeS6jgdLovQAKunNHX8l0avCy.jpg",
        
        "budget": 0,
        "genres": [
          { "id": 28, "name": "Action" },
          { "id": 53, "name": "Thriller" },
          { "id": 10752, "name": "War" }
        ],
        "homepage": "https://www.amazon.com/dp/B08VFD1Y3B",
        "id": 567189,
        "imdb_id": "tt0499097",
        "original_language": "en",
        "original_title": "Tom Clancy's Without Remorse",
        "overview": "An elite Navy SEAL uncovers an international conspiracy while seeking justice for the murder of his pregnant wife.",
        "popularity": 1449.581,
        "poster_path": "/rEm96ib0sPiZBADNKBHKBv5bve9.jpg",
        "production_companies": [
          {
            "id": 4,
            "logo_path": "/fycMZt242LVjagMByZOLUGbCvv3.png",
            "name": "Paramount",
            "origin_country": "US"
          },
          {
            "id": 433,
            "logo_path": null,
            "name": "Weed Road Pictures",
            "origin_country": "US"
          },
          {
            "id": 82819,
            "logo_path": "/5Z8WWr0Lf1tInVWwJsxPP0uMz9a.png",
            "name": "Skydance Media",
            "origin_country": "US"
          },
          {
            "id": 51593,
            "logo_path": null,
            "name": "Midnight Radio",
            "origin_country": "US"
          },
          {
            "id": 102334,
            "logo_path": "/espa8KYmHedu5p7GRrP9FFICLUp.png",
            "name": "Outlier Society Productions",
            "origin_country": "US"
          },
          {
            "id": 114732,
            "logo_path": "/tNCbisMxO5mX2X2bOQxHHQZVYnT.png",
            "name": "New Republic Pictures",
            "origin_country": "US"
          },
          {
            "id": 20580,
            "logo_path": "/tkFE81jJIqiFYPP8Tho57MXRQEx.png",
            "name": "Amazon Studios",
            "origin_country": "US"
          }
        ],
        "production_countries": [
          { "iso_3166_1": "US", "name": "United States of America" }
        ],
        "release_date": "2021-04-29",
        "revenue": 0,
        "runtime": 109,
        "spoken_languages": [
          { "english_name": "English", "iso_639_1": "en", "name": "English" },
          {
            "english_name": "Russian",
            "iso_639_1": "ru",
            "name": "P\u0443\u0441\u0441\u043a\u0438\u0439"
          }
        ],
        "status": "Released",
        "tagline": "Revenge. Blood. Terrorists",
        "title": "Tom Clancy's Without Remorse",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 1083
      },
      {
        "adult": false,
        "backdrop_path": "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
        "belongs_to_collection": {
          "id": 535313,
          "name": "Godzilla Collection",
          "poster_path": "/inNN466SKHNjbGmpfhfsaPQNleS.jpg",
          "backdrop_path": "/oboBn4VYB79uDxnyIri0Nt3U3N2.jpg"
        },
        "budget": 200000000,
        "genres": [
          { "id": 28, "name": "Action" },
          { "id": 12, "name": "Adventure" },
          { "id": 878, "name": "Science Fiction" }
        ],
        "homepage": "https://www.godzillavskong.net/",
        "id": 399566,
        "imdb_id": "tt5034838",
        "original_language": "en",
        "original_title": "Godzilla vs. Kong",
        "overview": "In a time when monsters walk the Earth, humanity\u2019s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
        "popularity": 1417.39,
        "poster_path": "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
        "production_companies": [
          {
            "id": 174,
            "logo_path": "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
            "name": "Warner Bros. Pictures",
            "origin_country": "US"
          },
          {
            "id": 923,
            "logo_path": "/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png",
            "name": "Legendary Pictures",
            "origin_country": "US"
          }
        ],
        "production_countries": [
          { "iso_3166_1": "US", "name": "United States of America" }
        ],
        "release_date": "2021-03-24",
        "revenue": 435954000,
        "runtime": 113,
        "spoken_languages": [
          { "english_name": "English", "iso_639_1": "en", "name": "English" },
          {
            "english_name": "Turkish",
            "iso_639_1": "tr",
            "name": "T\u00fcrk\u00e7e"
          }
        ],
        "status": "Released",
        "tagline": "One Will Fall",
        "title": "Godzilla vs. Kong",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 5794
      },
      {
        "adult": false,
        "backdrop_path": "/iDdpiUnCeXvBmrkBFpL6lKsZt33.jpg",
        "budget": 0,
        "genres": [
          { "id": 53, "name": "Thriller" },
          { "id": 18, "name": "Drama" },
          { "id": 28, "name": "Action" },
          { "id": 9648, "name": "Mystery" }
        ],
        "homepage": "https://www.warnerbros.com/movies/those-who-wish-me-dead",
        "id": 578701,
        "imdb_id": "tt3215824",
        "original_language": "en",
        "original_title": "Those Who Wish Me Dead",
        "overview": "A young boy finds himself pursued by two assassins in the Montana wilderness with a survival expert determined to protecting him - and a forest fire threatening to consume them all.",
        "popularity": 1377.769,
        "poster_path": "/xCEg6KowNISWvMh8GvPSxtdf9TO.jpg",
        "production_companies": [
          {
            "id": 13240,
            "logo_path": "/aTc07YaNHo8WNgkQSnvLmG6w4nW.png",
            "name": "Bron Studios",
            "origin_country": "CA"
          },
          {
            "id": 8083,
            "logo_path": null,
            "name": "Film Rites",
            "origin_country": "US"
          },
          {
            "id": 53152,
            "logo_path": "/8XHHLy8GGTuHM9JMzYjGqxB6oPa.png",
            "name": "Creative Wealth Media Finance",
            "origin_country": "CA"
          },
          {
            "id": 12,
            "logo_path": "/iaYpEp3LQmb8AfAtmTvpqd4149c.png",
            "name": "New Line Cinema",
            "origin_country": "US"
          },
          {
            "id": 174,
            "logo_path": "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
            "name": "Warner Bros. Pictures",
            "origin_country": "US"
          },
          {
            "id": 106789,
            "logo_path": "/oEgUdRh5YWF6Il705WnpwauirIj.png",
            "name": "Bosque Ranch Productions",
            "origin_country": "US"
          }
        ],
        "production_countries": [
          { "iso_3166_1": "CA", "name": "Canada" },
          { "iso_3166_1": "US", "name": "United States of America" }
        ],
        "release_date": "2021-05-05",
        "revenue": 13126737,
        "runtime": 100,
        "spoken_languages": [
          { "english_name": "English", "iso_639_1": "en", "name": "English" }
        ],
        "status": "Released",
        "tagline": "Nature finds a way.",
        "title": "Those Who Wish Me Dead",
        "video": false,
        "vote_average": 7.0,
        "vote_count": 364
      },
      {
        "adult": false,
        "backdrop_path": "/efrdAWS63s8TTWdrI2uNdIhn1dj.jpg",
        "budget": 0,
        "genres": [
          { "id": 53, "name": "Thriller" },
          { "id": 28, "name": "Action" },
          { "id": 80, "name": "Crime" }
        ],
        "homepage": "https://www.lionsgate.com/movies/the-virtuoso",
        "id": 808023,
        "imdb_id": "tt4136456",
        "original_language": "en",
        "original_title": "The Virtuoso",
        "overview": "A lonesome stranger with nerves of steel must track down and kill a rogue hitman to satisfy an outstanding debt. But the only information he's been given is a time and location where to find his quarry. No name. No description. Nothing.",
        "popularity": 1257.853,
        "poster_path": "/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg",
        "production_companies": [
          {
            "id": 1632,
            "logo_path": "/cisLn1YAUuptXVBa0xjq7ST9cH0.png",
            "name": "Lionsgate",
            "origin_country": "US"
          },
          {
            "id": 7720,
            "logo_path": null,
            "name": "NAZZ Productions",
            "origin_country": ""
          }
        ],
        "production_countries": [
          { "iso_3166_1": "US", "name": "United States of America" }
        ],
        "release_date": "2021-04-30",
        "revenue": 0,
        "runtime": 105,
        "spoken_languages": [
          { "english_name": "English", "iso_639_1": "en", "name": "English" }
        ],
        "status": "Released",
        "tagline": "Every betrayal begins with trust.",
        "title": "The Virtuoso",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 101
      },
      {
        "adult": false,
        "backdrop_path": "/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg",
        "budget": 17000000,
        "genres": [
          { "id": 28, "name": "Action" },
          { "id": 53, "name": "Thriller" },
          { "id": 80, "name": "Crime" },
          { "id": 35, "name": "Comedy" }
        ],
        "homepage": "https://www.nobody.movie",
        "id": 615457,
        "imdb_id": "tt7888964",
        "original_language": "en",
        "original_title": "Nobody",
        "overview": "Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor \u2014 a \"nobody.\" When two thieves break into his home one night, Hutch's unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.",
        "popularity": 1069.612,
        "poster_path": "/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
        "production_companies": [
          {
            "id": 33,
            "logo_path": "/8lvHyhjr8oUKOOy2dKXoALWKdp0.png",
            "name": "Universal Pictures",
            "origin_country": "US"
          },
          {
            "id": 121470,
            "logo_path": null,
            "name": "87North Productions",
            "origin_country": "US"
          },
          {
            "id": 86647,
            "logo_path": null,
            "name": "Odenkirk Provissiero Entertainment",
            "origin_country": "US"
          },
          {
            "id": 123230,
            "logo_path": null,
            "name": "Eighty Two Films",
            "origin_country": "US"
          },
          {
            "id": 154091,
            "logo_path": null,
            "name": "Perfect World Pictures",
            "origin_country": ""
          }
        ],
        "production_countries": [
          { "iso_3166_1": "US", "name": "United States of America" }
        ],
        "release_date": "2021-03-26",
        "revenue": 46088130,
        "runtime": 92,
        "spoken_languages": [
          { "english_name": "English", "iso_639_1": "en", "name": "English" },
          {
            "english_name": "Russian",
            "iso_639_1": "ru",
            "name": "P\u0443\u0441\u0441\u043a\u0438\u0439"
          },
          { "english_name": "Spanish", "iso_639_1": "es", "name": "Espa\u00f1ol" }
        ],
        "status": "Released",
        "tagline": "Never underestimate a nobody.",
        "title": "Nobody",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 1796
      },
      {
        "adult": false,
        "backdrop_path": "/hP7dN2B5ztQgSIN5Qvk63MY4EeO.jpg",
        "budget": 0,
        "genres": [
          { "id": 35, "name": "Comedy" },
          { "id": 99, "name": "Documentary" },
          { "id": 10770, "name": "TV Movie" }
        ],
        "homepage": "https://binge.com.au/shows/show-friends-the-reunion!10539",
        "id": 691179,
        "imdb_id": "tt11337862",
        "original_language": "en",
        "original_title": "Friends: The Reunion",
        "overview": "The cast of Friends reunites for a once-in-a-lifetime celebration of the hit series, an unforgettable evening filled with iconic memories, uncontrollable laughter, happy tears, and special guests.",
        "popularity": 1103.939,
        "poster_path": "/bT3c4TSOP8vBmMoXZRDPTII6eDa.jpg",
        "production_companies": [
          {
            "id": 1957,
            "logo_path": "/3T19XSr6yqaLNK8uJWFImPgRax0.png",
            "name": "Warner Bros. Television",
            "origin_country": "US"
          },
          {
            "id": 31810,
            "logo_path": "/3oyBCnFO3tIRmny3yzYQpF5n2cS.png",
            "name": "Bright/Kauffman/Crane Productions",
            "origin_country": "US"
          }
        ],
        "production_countries": [
          { "iso_3166_1": "US", "name": "United States of America" }
        ],
        "release_date": "2021-05-27",
        "revenue": 0,
        "runtime": 104,
        "spoken_languages": [
          { "english_name": "English", "iso_639_1": "en", "name": "English" },
          { "english_name": "Spanish", "iso_639_1": "es", "name": "Espa\u00f1ol" }
        ],
        "status": "Released",
        "tagline": "The One Where They Get Back Together",
        "title": "Friends: The Reunion",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 289
      },
      {
        "adult": false,
        "backdrop_path": "/mYM8x2Atv4MaLulaV0KVJWI1Djv.jpg",
        
        "budget": 0,
        "genres": [
          { "id": 28, "name": "Action" },
          { "id": 80, "name": "Crime" },
          { "id": 53, "name": "Thriller" }
        ],
        "homepage": "https://www.lionsgate.com/movies/vanquish",
        "id": 804435,
        "imdb_id": "tt5932368",
        "original_language": "en",
        "original_title": "Vanquish",
        "overview": "Victoria is a young mother trying to put her dark past as a Russian drug courier behind her, but retired cop Damon forces Victoria to do his bidding by holding her daughter hostage. Now, Victoria must use guns, guts and a motorcycle to take out a series of violent gangsters\u2014or she may never see her child again.",
        "popularity": 892.043,
        "poster_path": "/AoWY1gkcNzabh229Icboa1Ff0BM.jpg",
        "production_companies": [
          {
            "id": 90573,
            "logo_path": null,
            "name": "March On Productions",
            "origin_country": "US"
          },
          {
            "id": 152934,
            "logo_path": null,
            "name": "Capstone Group",
            "origin_country": ""
          }
        ],
        "production_countries": [
          { "iso_3166_1": "US", "name": "United States of America" },
          { "iso_3166_1": "AQ", "name": "Antarctica" }
        ],
        "release_date": "2021-04-16",
        "revenue": 0,
        "runtime": 96,
        "spoken_languages": [
          { "english_name": "English", "iso_639_1": "en", "name": "English" },
          {
            "english_name": "Turkish",
            "iso_639_1": "tr",
            "name": "T\u00fcrk\u00e7e"
          }
        ],
        "status": "Released",
        "tagline": "She's got one night to save her life.",
        "title": "Vanquish",
        "video": false,
        "vote_average": 6.0,
        "vote_count": 112
      },
      {
        "adult": false,
        "backdrop_path": "/fejok33Ijc6SppiEU1cfwA9Mo2.jpg",
        
        "budget": 0,
        "genres": [
          { "id": 28, "name": "Action" },
          { "id": 80, "name": "Crime" },
          { "id": 18, "name": "Drama" }
        ],
        "homepage": "https://www.netflix.com/title/81248114",
        "id": 717192,
        "imdb_id": "tt14217100",
        "original_language": "nl",
        "original_title": "Ferry",
        "overview": "Before he built a drug empire, Ferry Bouman returns to his hometown on a revenge mission that finds his loyalty tested \u2014 and a love that alters his life.",
        "popularity": 958.662,
        "poster_path": "/w6n1pu9thpCVHILejsuhKf3tNCV.jpg",
        "production_companies": [
          {
            "id": 120281,
            "logo_path": null,
            "name": "De Mensen",
            "origin_country": ""
          }
        ],
        "production_countries": [
          { "iso_3166_1": "BE", "name": "Belgium" },
          { "iso_3166_1": "NL", "name": "Netherlands" }
        ],
        "release_date": "2021-05-14",
        "revenue": 0,
        "runtime": 106,
        "spoken_languages": [
          { "english_name": "Dutch", "iso_639_1": "nl", "name": "Nederlands" }
        ],
        "status": "Released",
        "tagline": "",
        "title": "Ferry",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 74
      },
      {
        "adult": false,
        "backdrop_path": "/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg",
        
        "budget": 0,
        "genres": [
          { "id": 16, "name": "Animation" },
          { "id": 28, "name": "Action" },
          { "id": 12, "name": "Adventure" },
          { "id": 14, "name": "Fantasy" },
          { "id": 18, "name": "Drama" }
        ],
        "homepage": "https://kimetsu.com/anime/movie/mugenressyahen/",
        "id": 635302,
        "imdb_id": "tt11032374",
        "original_language": "ja",
        "original_title": "\u5287\u5834\u7248\u300c\u9b3c\u6ec5\u306e\u5203\u300d\u7121\u9650\u5217\u8eca\u7de8",
        "overview": "Tanjir\u014d Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Ky\u014djur\u014d Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
        "popularity": 1049.135,
        "poster_path": "/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
        "production_companies": [
          {
            "id": 5887,
            "logo_path": "/m6FEqz8rQECnmfjEwjNhNAlmhCJ.png",
            "name": "ufotable",
            "origin_country": "JP"
          },
          {
            "id": 2883,
            "logo_path": "/rDYExnBV61jGQnkhVVrPN4Yl7O1.png",
            "name": "Aniplex",
            "origin_country": "JP"
          },
          {
            "id": 2918,
            "logo_path": "/xS2KwwAuvLe9zhfoYxyZ6JudKiA.png",
            "name": "Shueisha",
            "origin_country": "JP"
          },
          {
            "id": 91520,
            "logo_path": "/wdcFLdFVOPEm3uEp6Hb9OXgi5Zd.png",
            "name": "STUDIO MAUSU",
            "origin_country": "JP"
          }
        ],
        "production_countries": [{ "iso_3166_1": "JP", "name": "Japan" }],
        "release_date": "2020-10-16",
        "revenue": 475000000,
        "runtime": 117,
        "spoken_languages": [
          {
            "english_name": "Japanese",
            "iso_639_1": "ja",
            "name": "\u65e5\u672c\u8a9e"
          }
        ],
        "status": "Released",
        "tagline": "With your blade, bring an end to the nightmare.",
        "title": "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 1109
      },
      {
        "adult": false,
        "backdrop_path": "/z2UtGA1WggESspi6KOXeo66lvLx.jpg",
        "belongs_to_collection": {
          "id": 521226,
          "name": "A Quiet Place Collection",
          "poster_path": "/7WkFgOFJ6kKpqfEUo78zS3gjDlm.jpg",
          "backdrop_path": "/aYIWZ8SmnZt6rDCuIvXzzcnxjWC.jpg"
        },
        "budget": 61000000,
        "genres": [
          { "id": 18, "name": "Drama" },
          { "id": 878, "name": "Science Fiction" },
          { "id": 53, "name": "Thriller" }
        ],
        "homepage": "https://www.aquietplacemovie.com",
        "id": 520763,
        "imdb_id": "tt8332922",
        "original_language": "en",
        "original_title": "A Quiet Place Part II",
        "overview": "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.",
        "popularity": 1043.464,
        "poster_path": "/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg",
        "production_companies": [
          {
            "id": 2481,
            "logo_path": "/nVEP2IHCDOBOldgDL4SSufitN9.png",
            "name": "Platinum Dunes",
            "origin_country": "US"
          },
          {
            "id": 29312,
            "logo_path": null,
            "name": "Sunday Night",
            "origin_country": "US"
          },
          {
            "id": 4,
            "logo_path": "/fycMZt242LVjagMByZOLUGbCvv3.png",
            "name": "Paramount",
            "origin_country": "US"
          }
        ],
        "production_countries": [
          { "iso_3166_1": "US", "name": "United States of America" }
        ],
        "release_date": "2021-05-21",
        "revenue": 80500000,
        "runtime": 97,
        "spoken_languages": [
          { "english_name": "English", "iso_639_1": "en", "name": "English" }
        ],
        "status": "Released",
        "tagline": "Silence is not enough.",
        "title": "A Quiet Place Part II",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 113
      },
      {
        "adult": false,
        "backdrop_path": "/qqkpwhiB1BQcSvegL10uHKMzKKl.jpg",
        
        "budget": 0,
        "genres": [
          { "id": 16, "name": "Animation" },
          { "id": 35, "name": "Comedy" },
          { "id": 14, "name": "Fantasy" }
        ],
        "homepage": "",
        "id": 813258,
        "imdb_id": "tt14423802",
        "original_language": "en",
        "original_title": "Monster Pets: A Hotel Transylvania Short",
        "overview": "Drac tries out some new monster pets to help occupy Tinkles for playtime.",
        "popularity": 981.665,
        "poster_path": "/dkokENeY5Ka30BFgWAqk14mbnGs.jpg",
        "production_companies": [
          {
            "id": 5,
            "logo_path": "/71BqEFAF4V3qjjMPCpLuyJFB9A.png",
            "name": "Columbia Pictures",
            "origin_country": "US"
          },
          {
            "id": 2251,
            "logo_path": "/6l16UFSkZ1oPpyBYaILgffFZlTc.png",
            "name": "Sony Pictures Animation",
            "origin_country": "US"
          }
        ],
        "production_countries": [
          { "iso_3166_1": "US", "name": "United States of America" }
        ],
        "release_date": "2021-04-02",
        "revenue": 0,
        "runtime": 6,
        "spoken_languages": [
          { "english_name": "English", "iso_639_1": "en", "name": "English" }
        ],
        "status": "Released",
        "tagline": "",
        "title": "Monster Pets: A Hotel Transylvania Short",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 148
      },
      {
        "adult": false,
        "backdrop_path": "/rlNnwObbMu5G2FaOUlacnUIdIIA.jpg",
        "belongs_to_collection": {
          "id": 822306,
          "name": "Miraculous World",
          "poster_path": "/jaQiXB7ZCiW8zUCnuZ7sf73yX4Z.jpg",
          "backdrop_path": "/fL266xNoCgTa4rGHzfRdLHpQnJ1.jpg"
        },
        "budget": 0,
        "genres": [
          { "id": 16, "name": "Animation" },
          { "id": 35, "name": "Comedy" },
          { "id": 10751, "name": "Family" },
          { "id": 12, "name": "Adventure" }
        ],
        "homepage": "",
        "id": 726684,
        "imdb_id": "tt12816634",
        "original_language": "fr",
        "original_title": "Miraculous World : Shanghai, la l\u00e9gende de Ladydragon",
        "overview": "On school break, Marinette heads to Shanghai to meet Adrien. But after arriving, Marinette loses all her stuff, including the Miraculous that allows her to turn into Ladybug!",
        "popularity": 1019.579,
        "poster_path": "/msI5a9TPnepx47JUb2vl88hb80R.jpg",
        "production_companies": [
          {
            "id": 79650,
            "logo_path": null,
            "name": "Zagtoon",
            "origin_country": ""
          },
          {
            "id": 35136,
            "logo_path": null,
            "name": "Method Animation",
            "origin_country": ""
          },
          {
            "id": 79175,
            "logo_path": null,
            "name": "SAMG Animation",
            "origin_country": "KR"
          },
          {
            "id": 109744,
            "logo_path": null,
            "name": "Norman Studio Works",
            "origin_country": ""
          },
          {
            "id": 135745,
            "logo_path": "/rvbzeCUBu9VQnlAnug544dKN3zd.png",
            "name": "The Walt Disney Company France",
            "origin_country": "FR"
          },
          {
            "id": 22123,
            "logo_path": "/zPTy6QDAlCKGeAALZoFEL3QAlut.png",
            "name": "TF1",
            "origin_country": "FR"
          },
          {
            "id": 118295,
            "logo_path": "/sihmHSzTQcdIyQfYoPFtEf72jYP.png",
            "name": "Gloob",
            "origin_country": "BR"
          },
          {
            "id": 20498,
            "logo_path": "/f1IuC7TbBHlNHybw2TZn5R1p4sx.png",
            "name": "T\u00e9l\u00e9-Qu\u00e9bec",
            "origin_country": "CA"
          },
          {
            "id": 53422,
            "logo_path": null,
            "name": "Fantawild Animation Inc.",
            "origin_country": ""
          },
          {
            "id": 138896,
            "logo_path": null,
            "name": "Mediawan",
            "origin_country": ""
          }
        ],
        "production_countries": [
          { "iso_3166_1": "FR", "name": "France" },
          { "iso_3166_1": "US", "name": "United States of America" }
        ],
        "release_date": "2021-04-04",
        "revenue": 0,
        "runtime": 52,
        "spoken_languages": [
          { "english_name": "French", "iso_639_1": "fr", "name": "Fran\u00e7ais" }
        ],
        "status": "Released",
        "tagline": "",
        "title": "Miraculous World: Shanghai \u2013 The Legend of Ladydragon",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 371
      },
      {
        "adult": false,
        "backdrop_path": "/hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg",
        
        "budget": 0,
        "genres": [
          { "id": 16, "name": "Animation" },
          { "id": 12, "name": "Adventure" },
          { "id": 14, "name": "Fantasy" },
          { "id": 10751, "name": "Family" },
          { "id": 28, "name": "Action" }
        ],
        "homepage": "https://movies.disney.com/raya-and-the-last-dragon",
        "id": 527774,
        "imdb_id": "tt5109280",
        "original_language": "en",
        "original_title": "Raya and the Last Dragon",
        "overview": "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it\u2019s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
        "popularity": 1086.606,
        "poster_path": "/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
        "production_companies": [
          {
            "id": 2,
            "logo_path": "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
            "name": "Walt Disney Pictures",
            "origin_country": "US"
          },
          {
            "id": 6125,
            "logo_path": "/tVPmo07IHhBs4HuilrcV0yujsZ9.png",
            "name": "Walt Disney Animation Studios",
            "origin_country": "US"
          }
        ],
        "production_countries": [
          { "iso_3166_1": "US", "name": "United States of America" }
        ],
        "release_date": "2021-03-03",
        "revenue": 111641532,
        "runtime": 107,
        "spoken_languages": [
          { "english_name": "English", "iso_639_1": "en", "name": "English" }
        ],
        "status": "Released",
        "tagline": "A quest to save her world.",
        "title": "Raya and the Last Dragon",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 2992
      },
      {
        "adult": false,
        "backdrop_path": "/yC4DRg5aGgNpkHpUDpLtBqzownS.jpg",
        
        "budget": 0,
        "genres": [
          { "id": 878, "name": "Science Fiction" },
          { "id": 28, "name": "Action" }
        ],
        "homepage": "",
        "id": 586047,
        "imdb_id": "tt13316722",
        "original_language": "ko",
        "original_title": "\uc11c\ubcf5",
        "overview": "A former intelligence agent gets involved with the first human clone, Seo Bok, who others seek, causing trouble.",
        "popularity": 810.864,
        "poster_path": "/nxxuWC32Y6TULj4VnVwMPUFLIpK.jpg",
        "production_companies": [
          {
            "id": 7036,
            "logo_path": "/javbyY0ZCvlFJtly3tpZqf2NwLX.png",
            "name": "CJ Entertainment",
            "origin_country": "KR"
          },
          {
            "id": 70681,
            "logo_path": null,
            "name": "TPS Company",
            "origin_country": "KR"
          },
          {
            "id": 142591,
            "logo_path": null,
            "name": "STUDIO101",
            "origin_country": "KR"
          },
          {
            "id": 128404,
            "logo_path": "/dP3usmr6di1jMPH738rvbxdkmSQ.png",
            "name": "CJ ENM",
            "origin_country": "KR"
          }
        ],
        "production_countries": [{ "iso_3166_1": "KR", "name": "South Korea" }],
        "release_date": "2021-04-12",
        "revenue": 0,
        "runtime": 114,
        "spoken_languages": [
          { "english_name": "English", "iso_639_1": "en", "name": "English" },
          {
            "english_name": "Korean",
            "iso_639_1": "ko",
            "name": "\ud55c\uad6d\uc5b4/\uc870\uc120\ub9d0"
          }
        ],
        "status": "Released",
        "tagline": "Live the Moment",
        "title": "Seobok",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 53
      }
    ],
  });

  console.log({ movie });
}

run()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });