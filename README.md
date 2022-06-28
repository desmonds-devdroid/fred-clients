# fred-clients
Fred's Clients Limb

A Client:
 - is a collection of string tags
 - one tag is marked as Primary Identifier (i.e. name)
 - is stored in a text file
   - first line: primary identifier tag 
   - remaining tags on following lines, one per line

Clients:
 - is a database consisting of a single folder
 - text files represent clients - one text file is one client

System:
 - ClientsDB object
   - getClients()
   - setClients(data)
   - saveClient(data)
      - adds or updates as required

 - Client object
   - getTags()
   - setTags()
   - primaryID - string
   - saveToFile(path)

 - Client file names
   - duplicates should never arise, by nature of the business, but just in case
     (and for the sake of human readability in the file system)
   - client files named by primaryId
   - before saving, a check for that file 
     - if it exists, add a '2' on the end
       - if that exists, add a '3' instead
       - etc until a free name is found

