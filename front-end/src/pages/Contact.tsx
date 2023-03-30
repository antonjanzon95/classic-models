import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Office {
  officeCode: number;
  city: string;
  addressLine1: string;
  state: string;
  country: string;
  postalCode: string;
  territory: string;
}

const Contact = () => {
  const [offices, setOffices] = useState<Office[]>([]);

  useEffect(() => {
    const fetchOffices = async () => {
      const response = await fetch("http://localhost:3000/offices");
      const data = await response.json();
      setOffices(data);
    };
    fetchOffices();
  }, []);

  return (
    <>
      <section className="bg-slate-200">
        <h1 className="mt-20 font-extrabold text-5xl text-center">Contact</h1>
        <div className="flex flex-wrap gap-6 justify-center">
          {offices.map((office, index) => (
            <Link key={index} to={`/contact/${office.officeCode}`}>
              <article
                key={index}
                className="p-8 bg-slate-50 shadow-xl text-gray-900 w-[300px] flex flex-wrap"
              >
                {office.city} <br />
                {office.addressLine1} {office.postalCode} <br />
                {office.state}, {office.country} <br />
                {office.territory}
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Contact;
