require 'csv'

Measurement.destroy_all

csv_text = File.read(Rails.root.join('lib', 'seeds', 'data.csv'))
csv = CSV.parse(csv_text, :headers => true)
csv.each do |row|
  t = Measurement.new
  t.datetime = row['datetime']
  t.dB = row['dB'].to_f
  t.save
end
