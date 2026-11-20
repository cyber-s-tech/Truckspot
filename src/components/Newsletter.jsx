import { useState } from "react";
 
import {

  ArrowRight,

  Mail,

  CheckCircle,

  Bell,

} from "lucide-react";
 
import { motion } from "framer-motion";
 
const Newsletter = () => {

  const [email, setEmail] = useState("");

  const [subscribed, setSubscribed] = useState(false);

  const [error, setError] = useState("");
 
  const handleSubmit = (e) => {

    e.preventDefault();
 
    setError("");

    setSubscribed(false);
 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    if (!email.trim()) {

      setError("Please enter your email address.");

      return;

    }
 
    if (!emailRegex.test(email)) {

      setError("Please enter a valid email address.");

      return;

    }
 
    // Frontend demo only

    setSubscribed(true);

    setEmail("");

  };
 
  return (
<section

      id="newsletter"

      className="relative py-24 md:py-28 bg-[#fffaf5] overflow-hidden"
>
 
      {/* Background Decorations */}
<div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-200/40 rounded-full blur-3xl" />
 
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-yellow-100/60 rounded-full blur-3xl" />
 
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
 
        <motion.div

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.6 }}

          className="relative bg-[#24211e] rounded-[32px] px-6 py-14 md:px-16 md:py-20 overflow-hidden"
>
 
          {/* Decorative Circle */}
<div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
 
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-yellow-500/10 rounded-full blur-3xl" />
 
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 
            {/* Left Content */}
<div>
 
              <div className="inline-flex items-center gap-2 bg-white/10 text-orange-300 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
 
                <Bell size={15} />
 
                Stay Updated
 
              </div>
 
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
 
                Good Food
<br />
 
                <span className="text-orange-400">

                  Comes With Great Updates.
</span>
 
              </h2>
 
              <p className="text-stone-300 mt-6 leading-7 max-w-lg">
 
                Get the latest food truck discoveries, exciting new

                locations, special menus and local food updates

                delivered straight to your inbox.
 
              </p>
 
              {/* Features */}
<div className="flex flex-wrap gap-5 mt-8">
 
                <div className="flex items-center gap-2 text-sm text-stone-300">
 
                  <CheckCircle

                    size={17}

                    className="text-orange-400"

                  />
 
                  New Truck Alerts
 
                </div>
 
                <div className="flex items-center gap-2 text-sm text-stone-300">
 
                  <CheckCircle

                    size={17}

                    className="text-orange-400"

                  />
 
                  Local Food Updates
 
                </div>
 
              </div>
 
            </div>
 
 
            {/* Right Form */}
<div className="bg-white rounded-[24px] p-7 md:p-9 shadow-2xl">
 
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
 
                <Mail

                  size={27}

                  className="text-orange-500"

                />
 
              </div>
 
              <h3 className="text-2xl font-extrabold text-[#24211e]">
 
                Join Our Foodie Community
 
              </h3>
 
              <p className="text-sm text-stone-500 mt-3 leading-6">
 
                Subscribe to our newsletter and never miss a delicious update.
 
              </p>
 
 
              <form

                onSubmit={handleSubmit}

                className="mt-7"
>
 
                <label

                  htmlFor="newsletter-email"

                  className="block text-sm font-bold text-stone-700 mb-2"
>

                  Email Address
</label>
 
                <div className="relative">
 
                  <Mail

                    size={18}

                    className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"

                  />
 
                  <input

                    id="newsletter-email"

                    type="email"

                    value={email}

                    onChange={(e) => {

                      setEmail(e.target.value);

                      setError("");

                      setSubscribed(false);

                    }}

                    placeholder="Enter your email address"

                    className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-11 pr-4 py-4 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"

                  />
 
                </div>
 
 
                {error && (
 
                  <p className="text-red-500 text-xs mt-2">

                    {error}
</p>
 
                )}
 
 
                {subscribed && (
 
                  <p className="flex items-center gap-2 text-green-600 text-sm mt-3 font-medium">
 
                    <CheckCircle size={17} />
 
                    Thanks for subscribing!
 
                  </p>
 
                )}
 
 
                <button

                  type="submit"

                  className="w-full mt-5 flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-orange-200"
>
 
                  Subscribe Now
 
                  <ArrowRight size={19} />
 
                </button>
 
              </form>
 
 
              <p className="text-xs text-stone-400 text-center mt-5">
 
                No spam. Just good food and great updates.
 
              </p>
 
            </div>
 
          </div>
 
        </motion.div>
 
      </div>
 
    </section>

  );

};
 
export default Newsletter;
 