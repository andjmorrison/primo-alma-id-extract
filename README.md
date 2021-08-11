# Primo Alma ID Extract

**Description**

*Simple JS bookmarklet to display originating system for Primo search results. Also displays Alma MMSid to user.*

**Usage**

*Create bookmarklet by pasting contents of ```app.js``` into bookmark URL field. Run the bookmarklet on a Primo search results screen to display information.*

**Known Bugs**

* [ ] Clicking inside each result still navigates to each title card. Click and drag to select MMSID.
* [ ] RegEx matching on ID no. is being performed on integers only. For some eResources with alphanumeric IDs, this will place alpha-characters in SYSTEM div. Further testing needed.