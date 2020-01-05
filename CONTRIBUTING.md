## Unit Testing (Put this section in the contribution.md file)

### What is it?

With react components we can now start adding unit tests which will give us a lot more security around deploying ampcss across all the websites that use the framework.

### What should I test?

If you are not sure what to test then feel free to ask one of your fellow FE devs but normally you have four types of testing:

-   functionality testing - if a button is clicked will it fire an event?
-   state testing - if a form manages the inputs state (eg; value, selected etc)
-   snapshot testing - snapshot of the components markup
-   prop testing - based on what props are passed in do they go to the right places?

It all depends on how complex the component is but the majority of the components will be mainly snapshots/prop testing.
