const SmashData = [
    {
        id: 1,
        name: 'Mario',
        difficulty: 'Beginner',
        image: 'https://www.smashbros.com/wiiu-3ds/sp/images/character/mario/main.png'
    },
    {
        id: 2,
        name: 'Samus',
        difficulty: 'Beginner',
        image: 'https://www.ssbwiki.com/images/thumb/0/03/Samus_SSBU.png/250px-Samus_SSBU.png'
    },
    {
        id: 3,
        name: 'Peach',
        difficulty: 'Beginner',
        image: 'https://www.ssbwiki.com/images/thumb/7/74/Peach_SSBU.png/250px-Peach_SSBU.png'
    },
    {
        id: 4,
        name: 'Ness',
        difficulty: 'Experienced',
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQERIREBASFhISEA8QEBASFhUVFg8VFREWFhcVFRYYHyggGBolGxUVITEhJSkrLi4vFx8zODMsNygtLisBCgoKDg0OGxAQGy0lHyYtLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQECAwQGBwj/xAA9EAACAQIDBQUFBQcEAwAAAAAAAQIDEQQFEgYhMUFREyJhcYEHMkKRoRRSscHRFSNDU3KS4RZigvAzwvH/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUG/8QANxEBAAIBAgQDBAkDBAMAAAAAAAECAwQREiExQQUTUSIykaEUFUJSYXGBsdEGwfAWM+HiI1Ni/9oADAMBAAIRAxEAPwD3EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtqVFFOUmklvbe5IOxEzO0OZzLbOlBuNGLqP73ux+fMrnJEdHqYPCsl+d52/dA4na3Fz92UILpGKf1lcqnLZ6ePwnT197ef1/hHTzfFN3eIqX81+Fiuct/Vd9XaX7n7/AMt/AbV4ql7zVSPSas/SSOxntHVTk8I09vd3j5/u6LLts6FRqNWLpt83vj81w9S2ues9XmZ/Cc1OdPaj5ukpzUknFpp8Gt6Ze8uYmJ2lcHAAAAAAAAAAAAAAAAAAAAAAABhxeJjShKc3aMVdsJUpN7RWvV5pn+fVMVJq+mmn3Ka/GXVme9930+j0VcNd+tvVGwViuZejsvuQmQsRcLHDdZOAdiUhkme1cJLuvVTv3qT4ecejJ0yTRl1ehx6iPS3r/L0rLsdCvTjUpu8X80+j6M3VtFo3h8pmw2xXml45tk6qAAAAAAAAAAAAAAAAAAAAAAOB26zjVPsYvuw97xl/gryTye54ZgiI457uQjPeZZl7tYZlIhMpskTjkr0EV1w4tYdY5I4lCX2Uzh4asoyf7qo1GX+1vhItw34Z2ef4npIzY+KPeh6abnygAAAAAAAAAAAAAAAAAAAEPnu0NHCK0mnNq6he3q3yRZjxzdyZiHHYvbSc3/5owXSLX4muuCsIcaExOZ0ZXcqkG3vbfMs4Kx2Jy39ZaLxdJ8JL0M+TFht72y7DrNTinekz+66niI8t/keXqMEY+dZ3h9JofFIzRtkrwz8pYq+dUKctE6kVKyelvfZ87FEUtPSGu2twVnabQrTz7DvhVh80d8u3o5GswT0vHxbVLH05e7NPyaZGYlbXLS3SYZlVT5nFkTCjkEoY6i3HHXqmzGNdfC0pt3lp0S8ZR7rfra/qehjnesS+M1mLy81qx6pUmzAAAAAAAAAAAAAAAAAAA4La32evFVZ16NfTUnvlCpdxbtbc1vj9S/Hm4Y2lCa7uJx2wmZUv4GtfepSjL6Np/Q0RnrPdHhl53VoTliFTcpNyqKFrv71mZL2nnO6+tYmdnrGDy3cklwSR5dpevEJrDZPG28r3S6PJduaXZ5hXXSNO3lpN+D3IeZqf9yUHQnubtz4Fqh1Ow2X/AGrFUIKN4xl2lR9IxV9/m7L1K8s7UlZhj24n0ev1NmqEvht5GF6caq1eiPxOyHOnUa8HvQaKeIWjq4mvmcKeIqYao9NWnLS78Jbk1pfky3y54eJpx+IY7W4J5S9S9njf2R9O2qW+SNGH3XjeJzE5949IdOWvPAAAAAAAAAAAAAAAAAAAAw4zFQpQc6jtFcX+SXNnJmI5ylWs2naHzzlOXRnm9ZWemnKrUhdWdm+636MZbb03ju0Yce2Taez1DA0TzrPQhpbU7VUcuVPtIynOo3phG11FcZO53Hjm6jLlijZ/YuDx3ZYt0oz1QjKE2t9nvVxvavLc3rbaZhFZX7OqNLFvEublHXKcKTS0xk/xLJy2mvCr4KRbih2GX5VRoanSpQhq3ycUlfzK+c9SbMOUbQ4TFTqU8PXjOdL30r9bXTfvK/NHZrMdVfFEpSRFKHhHtJwMoZlUlbdWjTnHxelRa+a+pu0870UZ42tu982by5YbC0aSveNOOpvi5NXk36k4jZC95vO8pI6gAAAAAAAAAAAAAAAAAAABzu2jfZQtw13fyKc3Rs0cRxy4vA5XH7TLEr3pUVTkutnuZCtt67Nd8cRfidHhUZbdU+zyj2vRksdBy914Wno6bpz1W9WvmjXg915+o996jsFhJUsvwsJq0lSTafLU20vkyi872lOvKsOkjE45MoTbutOll2MnTupKhOzXK9k36JslSPahC08nknsg1ftKGnh2FfX/AE2VvrpNGb3VdOr3OoY2irzTarAOvm+F3d2jS7Wb5K07xT9UXUvwY5lOcXmZKx2esZbie0gm+PB+PiX4cnHXeWXPj4L7Q2Z1EuLSJ2vWvWVUVmejEsXBu2pFUanFM7cSflX9GcvVgAAAAAAAAAAAAAAAABpZvgu2pOHPjHzI3rxRstw5OC27i8NQlCcoyXBNeO4zViYnZ6trRNd4b+HKLdTsyYnL6NfR21KE9D1Q1xT0vqrnYtMdFNqxPVJQYhXMNmmyamyzFUY1ISpzSlCcZQnF8JJqzRzc2QWzWyOFy9zlh4y1VNzlN6mo3vpXRE7Xm3UisQmK8imVtIQleN5N23vd5ldnoU5Ql8BJxjpi7FVs1o9mssOaIm28sum/Ft/Qp2meqG7XqWvx3EZosjolcrraoNX3xdvTij2dHebY9p7MmenDb826alAAAAAAAAAAAAAAAAAAamMwEKm9xWu26S4+vUjNYlZTLavLs5iHdk0+TaMWSOb1KTvDbgypyYZo1FzOxKuastKSTb1fU6haJnlsyKqnwY3Q4ZhSUhu7ENXE1LJnfzW0ho03f9TNfJ91olsKaXMoiquYUni1wuyyIkjEUoVKnuQfm9yLq6e9uztppT3pT2V4R0oNSd5Sep/oejhxeXXZ52fLGS28dG4XKAAAAAAAAAAAAAAFG7cQRG7Vq5jTim3Lh0ITkqujBeeyzA5lGq3G1na6/wBy6oVvFjLhmnNt1KsYq8pJLq2kTUuVz2vR7RSp1YNy4xTvv6mXNw79ebfp5tttMMFLEmaY2a+UtqFfxOIzRkjVCM1XvEIbo+WxzxKJQlFNlJ4CtVtpjaPG8uZbOCbRsr8+lZbVHIZfFU9EK6OvdCdZHaG5SyWkuN35surp6R2VW1eSejapYKnH3YR+V/xLYrEdIU2y3t1lsJElYAAAAAAAAAAAAADHWrRgrydruyIXyVpG9kq0m3Q7eNr6lY7W9bRvEuTWYRGYYtylZJuCtvXLxIZN5asPDEfij6+Jgr3afwytz6OxlneWqNoRH2idNK1S1tVpLdJJ/Cy+lduanJki28InG4iVRvfOXO7u93Ut6q4iIcvmmP7NqMGm3fcuRmz4YmYlqw33iU1k2KxMKerEadO5R46lfqZPPrNuGE0pTzqK4snvCfNkeex6kZmDdH4zaqMNz5u3Pd42RKscXRybus2SxODru/bqpU3WpyTgl5Rlvka8WOkMWfJk26bQ7I0sQAAAAAAAAAAAAAAAAAAIPaacoqm17uqSfnbd+Zj1ld6w1aWeco54uTs4xcrWTjFXZ5+ni85I4WrJSsUndWrPEWu6binw1bvoexw7dWOkTadoRyw85ve7W6KxROaI6Q0xp525ypUwkFfuubjFzlfhFJXbZGL2vO0JzSmON5cnjs5qutPdppKk3CNra+lyVaeZg46+vNmtl3y8NkfltOUrzn3rSTipLg0+Rpph86JraVmW9cfupKWczW7s4NdN5yfA6T0tPyZJ8QmOzEsfq40I+kv8EJ8Et2yfL/k+sv8A5+bfws6LTcqT3K++UUvC7djLn8Hy4438yPhK3FroyW2iqOwGTyr14qSSjOaiprvJcXvt5MjkicOKZiOkNk5qRHJ32IwuEwlOKdNXVnFJd+TXO/XxPN0Wm1Wsyb45/XtDFl1PBHtIvMNssfRfaUsFKvRurw92cfFSSs15o9+8Tp44cmSsz8J+CrFamXtMOo2T2poZjTcqalCpB6a1CorToy6NdPEnW0WjeC9JrKdJIAAAAAAAAAAAAAAAADXx2EjWg4S4Pn0fVEbVi0bSlW01neGrk+URw+q0nJytdvdZLkkV4sNce+yeTNN+rfq01JWkrouV1tNZ3hzOZYVwk0n5eRjzU2ergycdd0bgc0lQc4TgpwqJxaW571bj0I4s3A7n0/m9JcttTSSpRlwnSWmSXGUeTX/epXp8k4r2x/Ztzj8J9GbJjiLRa3WvzhubITpwo3rTSnN6tM/hjy9Xx9RqcGqvO9Kzt+B5uKPSHS06OGqcqUv7TzrX1mL70fFyfKt6MiyLDS/hR9N34EI8W1lPtz+qq+DFPZzG12Wxo6YUIu82tScuHRq/Lez1dLrc2rxz5kxyl3DjphtxQjNnsbHCPXUWlOTila17Jt+fI5q8Vr4+COszC696zO/aIdNlCVfVjMS1o4wi+i4f/OZfqM1tPWuh0ke1PWf8/ftDzK045nLk6NyeOxGJbjh46YLdqdvq+Xkjn1fotHXj1duK09v4/mTzcuSdsfKGfKMnVHERxFSUVV0unOVPd2sXwVRPjbkzHj1uHzf/ABVtFPx7NkcdqbWmJl2B7DOAAAAAAAAAAAAAAAAAAABpZnhO0jde8uHj4EL14oX4MvBPPo4/E07SV+T3mG+OYerW28NLNcB9qS7rUYyS7Th6eJC08FeKY5KsvDbl3YJ7N1H7s4Pzuj0MXjmGsbWrMfN5eTR3npMNeezmJXCCf9Mo/maq+N6O3W235xLLbSZY7K0sJi6fwVl5Xa+hZ9J8PzdbUn89v7qppmr2lobRSr1FDtITmo3W9WlH6byi+hwR7Wn2j12lq02rtTeMm7ncbh5Nd6LSstMW72t08TPlw3xbTLfiy480TEOp2exjxkaNFd2nTiu181u+ZTjyV0lb6i3O9p2hRmxTe0Y46Q6ypmDa7HCJKMdzqfp18zJXBvbzdR7Vp7en5/wuxYOKOXKv7ud/03i3jaVf7RJ0k9VROXC3JLxNGXVbYZrMfDoX01a3i1HouBxrclTa+FuMutuT9Dmhz8VeCesKsuPbmkTeoAAAAAAAAAAAAAAAAAAAAwVcHTm7yhFvq0c2hOL2iNolyW2eYunOFOnZKC1NW3XfDd5fiW10mPPXa/RHzbU5wg6W084+9Ti/JtFF/AMU+7eYc+n2jrDdo7Ww+KlL0aMWT+nL/ZyR8D6fHeG9R2qoPjGovRP8zLb+nNVHSaz/AJ+R9MpPq2VtFhnxcvWLKvqHW16RHxd+lY5a2MzbBVIuMrNNWd6b/QlHhHiET/2TpqsUTv8A2eZ47EfZKlZYab01U1wacX1R6WPS5oms5q9F9s9L12rLrPZ/mDqU9Dj3o7pPk/G5DJG1m2s74+fJ3M47im0bxszRPNZgkpVIb/dk2reTKdJvXNBmj2ZT57TAAAAAAAAAAAAAAAAAAAABRu28DlcXTp125SjGV29/+TxMmqzY8kzW0w2xjrau0xu0pbPYeXwNeTZ2PGtXX7W/6K7aTFPZZ/pWg+DmvU7H9Q6qOsR8FNtFj/FfHZOlyqT+hZH9SZu9I+aqdHX1Veysf5svkiz/AFLf/wBcfFH6HHqslsrDnVl8kP8AUeSemOPinXRR6oXOtmKK3qUm/Qj9dZcnLhhrpo61jfeUtsdlCoqclfvyTs+VlYl5lr+1Zon2abJfNcX2cXfyS6sjtMztDuOI23lnyDBVbxqVO6t7UXxd+vQ0YdNw24pZ82aJjhh0BrZAAAAAAAAAAAAAAAAAAAALK1PVGUbtak1dcVdAeX7YYb9nyhapKXaan3e60k1x+ZvxWrkj2qxKq0THOJc/HaqonZTrfM5bS6aeuOPg5vl+8yLbSrH+JU9VFlFvD9FPXHB5mb7zOvaBUjxlN/8ABMqnwvQz9j5yeZl9VJe0epy1P/giP1TofuT8Zd8zL6t7ZjaDE5hWcW5wpU0pVJtRV78IrxZTn0ejw19nHz/Hdp0/m3t15PQsLhkldoyVpWvSGm+SekMlSyEyjG8r8Bg4S/eSSk792+/Tbp4mnBSNuJHPefcSRoZgAAAAAAAAAAAAAAAAAAAAADzL2tSj2tCzu1CalHom1b8GbdLvwyhZ5xKaUk+u4vlxdGKbfmRQls0VFckd5Is+mP3Ucc3bOzmfrD1Z0pSUVUcHBy4alus38jztdjm21o7PR0GStZmtu70rL87jJKLknLnY8vib74N53hsV8Z4kZkpiSezmNhWoKVN3SlOL81LeeljpNKxEvNzXi15mEoTVgAAAAAAAAAAAAAAAAAApcBcC2rVUIuUnaMU5N9EjsRvyHg+1WZyxNarVfxSeldIrdFfKx6da8NYhVM83I160uaKrTLsK4fGfDe1+ZDidmIlK4MtrKmUmkSmEUPm+E1K5XaEqysyraKth7Ql3oRuotbpL15owZtJF53jlL0MOstSNrc4TS2prVo6IpxT96Td5NdPAYNHWtt7czPrrWrtXk6LYjP3hKqjN/uajSmvuPlI2ZcfFHLq8+l9peuwmmk00096a5mNpVAqAAAAAAAAAAAAAAAAoBQABC7W5fVxGGlToytK6bV7a0vhuW4bRW28uWjeHjObZZiKTcZ0ZRa43iz0OOLRylVs5rFU58yu0SI2omnfmUzCaby7Gale29bpeBKtkLVT+HlqRojmrX1MMpI5NXGhPI3N9yDfkvzKL3pXrK2mPJb3YdTk/s4xbs59nTXWTu/lEhOasdDy5ddl/s9w8GnVqVKj+6rQj8lv+pXOe09Eoxw67D0Y04xhCKjGKtGK4JFUzusZDgqAAqAAAAAAAAAAAAFAKMCgAABSUU+KT894HLbSZRRlUi+wg+69XdXUWtaI5S1afg2mLICOzmGdWFsLTfejfuK1r77lPmZJt1lfemKKzyhNbY7I0amFmsNQhCrBqpDs4JOdtzju43TNVL7TzebMbw5zIvZ/iZJOvKNJdH35/2p2XqzR9JivRXGNN5hsnRw6pzjqnv0zc7Pe+DstyM2bPktHXZt0tKcW0w2Fh1p3JJW4I828d3pxbbk6PKq2qlG/GPdfobMdt6w8nPXhvMQ3CaoAqBUABUAAAAAAAAAAAAAFGBawKAAAEVm89Mo+MX9Gd7J0RlOt315or7puoRNSAYMdR105x6xdvNb19QlS3DaJhD5dQTSvv8yFqRDRbLaU1QoqPAVZ7Tuyk0VQKoCoFQAAAAAAAAAAAAAAKMC1gUAgM02nhSm6cYtuN1KXFJ24JcyuckROz0cPhuTJj4/hCJrbV1JXsmrrwVu6v/a482GqvhU99v8n+EDi8fVlLVrateyvfi78yu2Wezdj8OxxXhtza0s6rRd1JfIq86yM+F4fWXoGyWayxNDVP3oycG+u66NOO02jm8TXYK4cm1eibuWMamoCH1qlVae5PvR9RbnCyOcJeFVNbmV7ozCuosRVTAuTAuuAAqAAAAAAAAAAAAACjAtkwMVSrZN+DA8yrYHEOTfZuV23eLTvd+ZntS2/R9Ri1uDhiOKFssHX/AJFT+1kOG3ov+maf78NTEYPE/wAmfyOcFvRGddgj7cI6tgcQuNNpeLj+ojFPoptr8X3odxsHVdKjKMuMp3S6WVjRjrNYeLrs1ct4mrrI4hMsYlJYhAQOYZlRdRqcldXikk5WRybRDZj02W0RNaywftCm4ycKr1KO5e621wX/AFEOKqU6fLxRWa7J3J6zlT73FNolWd4VaqkUvt+CRTJMy9AXICqAqAAAAAAAAAAAAAC1gY5gYJ07gas8ui+KAxzyiD5AYp5FSfwoC1ZJSXwoDPDBxjwQFKm4CGzTHummxKeOvFeIcZUxmqTk3vbuY7zzfXYtortBSxVpJ+NyuE7TGz0bZ6sp0oyXPj6G2nR8vrv93ZMRJsbLEC9AXAAAAAAAAAAAAAAAUsBRxAt0AU0ANAFHTAtdIC3sALJ4W4GjiskU/rxDsTMTvCFqbD0m72a/pk19GVzjrLbTxDNVfR2Gop3ak/OX6I5GKpbxHNPo6TBZfGlFRikkuCRbEbMdrTad7NpUwiuUQLgAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAVAAAAAAAAAAAAD/2Q=='
    },
    {
        id: 5,
        name: 'Pickachu',
        difficulty: 'Beginner',
        image: 'https://img.rankedboost.com/wp-content/plugins/super-smash-bros-ultimate/assets/character-images-main/Pikachu_SSBU.png'
    },
    {
        id: 6,
        name: 'Link',
        difficulty: 'Beginner',
        image: 'https://www.ssbwiki.com/images/thumb/8/84/Link_SSBU.png/250px-Link_SSBU.png'
    },
    {
        id: 7,
        name: 'Zelda',
        difficulty: 'Intermediate',
        image: 'https://vignette.wikia.nocookie.net/zelda/images/2/22/Zelda_%28SSB_3DS_%26_Wii_U%29.png/revision/latest?cb=20140610212822'
    },
    {
        id: 8,
        name: 'Joker',
        difficulty: 'Experienced',
        image: 'https://www.ssbwiki.com/images/thumb/1/16/Joker_Thief_-_Persona.png/250px-Joker_Thief_-_Persona.png'
    },
    {
        id: 9,
        name: 'Bowser',
        difficulty: 'Intermediate',
        image: 'https://www.ssbwiki.com/images/thumb/4/49/Bowser_SSBU.png/250px-Bowser_SSBU.png'
    },
    {
        id: 10,
        name: 'Donkey-Kong',
        difficulty: 'Beginner',
        image: 'https://img.rankedboost.com/wp-content/plugins/super-smash-bros-ultimate/assets/character-images-main/Donkey_Kong_SSBU.png'
    },
    {
        id: 11,
        name: 'Wii Fit Trainer',
        difficulty: 'Intermediate',
        image: 'https://img.rankedboost.com/wp-content/plugins/super-smash-bros-ultimate/assets/character-images-main/Wii_Fit_Trainer_SSBU.png'
    },
    {
        id: 12,
        name: 'Ganadorf',
        difficulty: 'Intermediate',
        image: 'https://www.ssbwiki.com/images/thumb/9/91/Ganondorf_SSBU.png/250px-Ganondorf_SSBU.png'
    },
    {
        id: 13,
        name: 'Zero-Suit Smaus',
        difficulty: 'Intermediate',
        image: 'https://www.smashbros.com/wiiu-3ds/sp/images/character/zerosuit_samus/main.png'
    },
    {
        id: 14,
        name: 'Snake',
        difficulty: 'Experienced',
        image: 'https://www.ssbwiki.com/images/thumb/0/02/Snake_SSBU.png/250px-Snake_SSBU.png'
    },
    {
        id: 15,
        name: 'Banjo-Kazooie',
        difficulty: 'unknown',
        image:'https://sickr.files.wordpress.com/2019/06/banjo_kazooie_smash.jpg'
    }
]
module.exports = SmashData