## Summary

|  |  |
|---|---|
| **Prepare** | because it's expensive<br>*concat*, *minimize*, *gzip* |
| &nbsp; | |
| **chunks** | split chunks into<br>*entry chunks*, *shared stuff for entries* and *on-demand chunks* |
| &nbsp; | |
| **for user interaction.** | depending on *application-logic*<br>also try to *guess* future user interactions |
| &nbsp; | |
| **Inline some stuff.** | *Small* stuff that is *needed* for the *initial load*.<br>Try to make *two parallel requests* (HTTP 1.1). |

