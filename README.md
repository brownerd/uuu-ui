# URAWSM ui-theme

Make UR own AWMS ui-theme easily.

Just watch this [video]()


## Installation/Dependencies
- Install [URAWSM-UI]() and activate it
- Install [URAWSM-SYNTAX]() and activate it
- Install [URAWSM-HELPER]() and activate it
- Click on the gear icon to access settings for URAWSM-UI
- Style away!


## Usage
1. Open this any project in Atom any
1. Enter `atom --dev .` in your terminal from your current project's root directory. This will open a new window that will be live reloaded on every theme setting update.
1. Goto Settings > Themes and click on the gear icon to access settings for URAWSM-UI
1. Just start at the top of the settings and work your way down. Make one change, and then check it out.
setting

## Issues
If your style doesn't show, or it if looks like all the styles reverted to the default, then just "reload" the window. You can do this in one of three ways:

- Goto View > Developer > Reload Window
- Or open the command palette `shift+cmd+P`, type `reload` and press enter


## Import/Export
At some point you will want to export, import and save your cool, clever and quickly made syntaxes. You will need [URAWSM-HELPER]() installed. Follow instructions there for exporting and importing.


![A screenshot of your theme](https://f.cloud.github.com/assets/69169/2289498/4c3cb0ec-a009-11e3-8dbd-077ee11741e5.gif)

## Extras!

**URAWSM-SYNTAX**
If you want to edit URAWSM syntax also, then install [URAWSM-SYNTAX]() and enjoy the same freedom to edit URAWSM SYNTAX also.

**URAWSM-HELPER**
If you want to export and import your Syntaxes and UIs, then install [URAWSM-HELPER]().

**File icons**
I got these from [File Icons](https://atom.io/packages/file-icons).

**PlatformIO IDE Terminal**
If you like your Terminal in your Atom editor check out [Platformio IDE Termina](https://atom.io/packages/platformio-ide-terminal).

**Monoid Font**
If you want more from a monospaced font, check out [Monoid](https://larsenwork.com/monoid/).


## Notes:
urawsm-syntax, lets you modify just about everything that it can. However, it can only go as far as the langauage grammar permits. When a language/Grammar is mapped in Atom, it follows the same conventions used in TextMate. Read this:  [12 Language Grammars](http://manual.macromates.com/en/language_grammars.html#naming_conventions). The take away, is that there are many ways to mark up a Grammar, and these decisions are made differently between languages. Thus, there is an inconsistency in the use of available classes in Atom to style. Furthermore, not every Grammar marks up all of its pieces. Sometimes a grammar might lump a bunch of pieces into one identifier.

But so what! You want to style the syntax for the languages that you use! You don't need to style EVERY DAMN LANGUAGE that exists right?! So just style what you use!

## Issues/Requests
If there is a special case that you need, then let me know. I can't promise that I can make an update, but I will look at the ticket and respond.
