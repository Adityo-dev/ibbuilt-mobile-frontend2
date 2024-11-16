import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const inputFieldStyle =
  "w-full border border-custom-border p-3 rounded-lg outline-none focus:border-custom-accent";

export default function Account() {
  return (
    <Tabs
      defaultValue="account"
      className="w-[40%] mx-auto mt-12 text-custom-secondary p-6 rounded-lg border border-custom-border"
    >
      <TabsList className="grid w-full grid-cols-2 gap-4">
        <TabsTrigger
          className="bg-custom-accent text-custom-white border border-custom-border "
          value="account"
        >
          Create Account
        </TabsTrigger>
        <TabsTrigger
          className="bg-custom-accent text-custom-white border border-custom-border"
          value="Login"
        >
          Login
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <section className="flex flex-col gap-6">
          <div>
            <h1 className="text-2xl font-medium">Create Account</h1>
            <p className="capitalize text-base font-medium mt-1">
              Please Register using account detail below.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <input
              className={inputFieldStyle}
              type="text"
              placeholder="Please Enter Your First Name"
            />
            <input
              className={inputFieldStyle}
              type="text"
              placeholder="Please Enter Your Last Name"
            />
            <input
              className={inputFieldStyle}
              type="email"
              placeholder="Please Enter Your Email"
            />
            <input
              className={inputFieldStyle}
              type="Password"
              placeholder="Please Enter Your Password"
            />
            <input
              className={inputFieldStyle}
              type="Password"
              placeholder="Please Enter Your Confirm Password"
            />
          </div>
        </section>
      </TabsContent>

      <TabsContent value="Login">
        <section className="flex flex-col gap-6">
          <div>
            <h1 className="text-2xl font-medium">Please login</h1>
            <p className="capitalize text-base font-medium mt-1">
              Please login using account detail bellow.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <input
              className={inputFieldStyle}
              type="email"
              placeholder="Please Enter Your Email"
            />
            <input
              className={inputFieldStyle}
              type="Password"
              placeholder="Please Enter Your Password"
            />
            <input
              className={inputFieldStyle}
              type="Password"
              placeholder="Please Enter Your Confirm Password"
            />
          </div>
        </section>
      </TabsContent>
    </Tabs>
  );
}
