const data = [
  {
    title: "Banking & Financial Institution",
    description:
      "Non-member banks and other financial institutions can now add a full card issuing capacity to their offerings to help their customer access their funds.",
    img: "/images/bankingg.png",
    url: "http://www.sendnspend.com/banks-and-financial-institutions.html",
  },
  {
    title: "Consultants \n\n",
    description:
      "Partner with us to leverage your network and become our digital sales consultant to simplify payments for your network and customers",
    img: "/images/individuall-2.png",
    url: "http://www.sendnspend.com/partner-withus.html",
  },
  {
    title: "Program Managers",
    description:
      "Highly reliable making paytments and collection solutions to help you manage your digital business transactions with safety and security",
    img: "/images/program-managerr.png",
    url: "http://www.sendnspend.com/program-managers.html",
  },
  {
    title: "Corporates",
    description:
      "You have got a business to run and we are there to help you with simplified banking solutions to help you operate better",
    img: "/images/corporatee.png",
    url: "http://www.sendnspend.com/corporate.html",
  },
];

const Hero = () => {
  return (
    <div class="row row-cols-1 row-cols-lg-2 g-4">
      {data.map((item) => (
        <div class="col">
          <div class="card h-100">
            <img src={item.img} class="card-img-top" alt={item.title} />
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.description}</p>
            </div>
            <div class="card-footer">
              <a href={item.url} class="btn btn-primary">
                Know More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
