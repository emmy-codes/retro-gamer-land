import React from "react";

function AboutMe() {
  return (
    <div>
      <div className="folder-header">
        <h4 className="header-content">
          Ugly not-actually-Word95-looking-doc
        </h4>
        <div className="folder-body">
          <p className="text-content">
            Howdy! I'm Emma, a budding JavaScript developer located in
            Stockholm, Sweden. I have studied for a year, and am delving into
            React currently (this website is built using it). I definitely have
            a passion for anything retro, oldschool and pixel-y!
            <br />
            <br />
            <hr />
            <br />
            This website was born out of my love for retro and really wanting my
            personal website to be something out of the ordinary. I hope you
            appreciate this blast from the past! For those of you that don't
            recognise it, this is Windows 95, the OS from my childhood. I can't
            wait to expand on this page, and work more on my mini games!
            <br />
            <br />
            <hr />
            <br />
            Feel free to reach out on LinkedIn if you have any thoughts, input,
            or just want to geek out a bit.
            <br />
            <br />
            Sincerely,
            <br />
            Emma Scott-Allen
          </p>
        </div>
        <button className="close">x</button>
      </div>
    </div>
  );
}

export default AboutMe;
